import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, isSubmitting } from 'redux-form';
import { isLoading } from '../../redux/actions/Globals';
import request from 'superagent'
import { setVisibilityModal } from '../../redux/actions/Modal';
import { setCandidateStatus } from '../../redux/actions/Candidate';

// Forms components
import DinamicForm from '../forms/DinamicForm';
import CandidateHighlightForm from '../forms/CandidateHighlightForm';

class CandidateHighlightContainer extends React.Component {

    constructor() {
        super();

        this.state = {
            isHighlightCandidate: false
        }

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(values) {
        this.props.loading(true);

        var data = {
            CandidateName: this.props.candidateName,
            CandidateEmail: this.props.candidateEmail,
            VacantId: this.props.vacantId
        }
        
        request
            .post('/destacar_candidato')
            .send(data)
            .set('application/json')
            .end((err, res) => {
                if (res.statusCode == 200) {
                    this.setState({isHighlightCandidate: true});
                    this.props.changeCandidateStatus(this.props.candidateStatus);
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
                this.state.isHighlightCandidate ?
                <div className='text-center'>
                    <i className="fa fa-check-circle text-success mb-3 display-3"></i> 
                    <p className="pb-3">Excelente haz destacado al candidato {this.props.candidateName}.</p>
                </div>
                :
                <div>
                    <CandidateHighlightForm candidateName={this.props.candidateName} />
                    <div className="text-center">
                        <button type="button" className="btn btn-outline-secondary mr-3" 
                            onClick={
                                () => this.props.onOpenModal({
                                    data: {}, show: false
                                })
                            }
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit" 
                            disabled={this.props.submitting}
                            className="btn btn-info"
                        >
                            Confirmar
                            { this.props.submitting ? <i className="fa fa-spinner fa-pulse fa-lg fa-fw float-right"></i> : null }
                        </button>
                    </div>
                </div>
            }
            </DinamicForm>
        )
        
    }
}

CandidateHighlightContainer.proptypes = {
    formId: PropTypes.string.isRequired,
    candidateName: PropTypes.string,
    candidateEmail: PropTypes.string,
    candidateStatus: PropTypes.object
}


const mapStateToProps = (state, ownProps) => {
    return {
        form: ownProps.formId,
        submitting: state.globals.loading,
        candidateName: state.modal.data.candidateName || '',
        candidateEmail: state.modal.data.candidateEmail || '',
        candidateStatus: state.modal.data.candidateStatus || {}
    }
}


const mapDispatchToProps = (dispatch) =>  {
    return {
        loading: (loading) => {
            dispatch(isLoading(loading));
        },
        onOpenModal: (show) => {
            dispatch(setVisibilityModal(show))
        },
        changeCandidateStatus: (obj) => {
            dispatch(setCandidateStatus(obj))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CandidateHighlightContainer);