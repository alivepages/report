import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, isSubmitting } from 'redux-form';
import { isLoading,  } from '../../redux/actions/Globals';
import { newCandidate } from '../../redux/actions/Candidate';
import request from 'superagent'

// Forms components
import DinamicForm from '../forms/DinamicForm';
import CandidateInviteForm from '../forms/CandidateInviteForm';

class CandidateInviteContainer extends React.Component {

    constructor() {
        super();

        this.state = {
            CandidateName: '',
            isSendCandidateInviteEmail: false,
            previouslyInvited: false
        }

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(values) {
        this.props.loading(true);

        var data = {
            CandidateName: values.CandidateName,
            CandidateEmail: values.CandidateEmail,
            VacantName: this.props.vacantName,
            VacantCode: this.props.vacantCode,
            VacantId: this.props.vacantId
        }

        var newCandidate = {
            Id: 0,
            Name: values.CandidateName, 
            Email: values.CandidateEmail,
            VacantId: this.props.vacantId,
            BirthDate: null, 
            CandidateSalary: null,
            ExperienceYears: null
        }
        
        if(this.props.validatePreviousInvitation(newCandidate)){
            this.props.loading(false); 
            this.setState({
                previouslyInvited:true,
                CandidateName:values.CandidateName
            });
            return;
        }
        
        
        this.setState({ CandidateName: values.CandidateName })
        request
            .post('/candidate_invite')
            .send(data)
            .set('application/json')
            .end((err, res) => {
                
                if(res.statusCode == 200){

                    this.setState({ isSendCandidateInviteEmail: true })

                    request
                        .get('/obtener_candidato_usando_email')
                        .query({email: values.CandidateEmail})
                        .end((err, res) => {                

                            if(err) {                    
                                this.props.isLoading(false);                
                                return;
                            }
                            
                            if(res.status == 200) {                                
                                newCandidate = JSON.parse(res.body);
                                newCandidate.VacantId = this.props.vacantId;
                            }
                            this.props.addCandidate(newCandidate);                    
                        });

                    this.props.loading(false);                    

                } else {
                    this.props.loading(false);
                }
        })
    }

    render() {
        return (
            <DinamicForm {...this.props} onSubmit={this.onSubmit}>
            {
                this.state.previouslyInvited ?
                <div className='text-center'>
                    <i className="fa fa-user-circle-o text-primary mb-3 display-3"></i> 
                    <p className="pb-3">El candidato {this.state.CandidateName} ya había sido previamente invitado a tu proceso.</p>
                </div> 
                :
                this.state.isSendCandidateInviteEmail ?
                <div className='text-center'>
                    <i className="fa fa-check-circle text-success mb-3 display-3"></i> 
                    <p className="pb-3">Se a enviado un correo a {this.state.CandidateName} para invitarlo a tu proceso de selección.</p>
                </div> 
                :  
                <div>
                <CandidateInviteForm />
                    <div className="form-group">
                        <button 
                            type="submit" 
                            disabled={this.props.submitting}
                            className="btn btn-primary btn-block"
                        >
                            Invitar
                            { this.props.submitting ? <i className="fa fa-spinner fa-pulse fa-lg fa-fw float-right"></i> : null }
                        </button>
                    </div>
                </div>
            }                            
            </DinamicForm>
        )
        
    }
}

CandidateInviteContainer.proptypes = {
    formId: PropTypes.string.isRequired
}


const mapStateToProps = (state, ownProps) => {
    return {
        form: ownProps.formId,
        submitting: state.globals.loading
    }
}


const mapDispatchToProps = (dispatch) =>  {
    return {
        loading: (loading) => {
            dispatch(isLoading(loading));
        },
        addCandidate: (data) => {
            dispatch(newCandidate(data));
        } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CandidateInviteContainer);