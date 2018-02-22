import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, isSubmitting } from 'redux-form';
import { isLoading } from '../../redux/actions/Globals';
import { setVisibilityModal } from '../../redux/actions/Modal';
import {removeCardCandidate} from '../../redux/actions/Candidate';
import request from 'superagent';

// Forms components
import DinamicForm from '../forms/DinamicForm';
import CandidateDeleteProcessForm from '../forms/CandidateDeleteProcessForm';

class CandidateDeleteProcessContainer extends React.Component {

    constructor() {
        super();

        this.state = {
            isDiscardedCandidate: false
        }

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(values) {
        this.props.loading(true);

        var data = {
            CandidateName: this.props.candidateName,
            CandidateEmail: this.props.candidateEmail,
            Comments: values.ReasonDiscardCandidate,
            VacantId: this.props.vacantId
        }        

        request
            .post('/descartar_candidato')
            .send(data)
            .set('application/json')
            .end((err, res) => {
                if (res.statusCode == 200) {
                    this.setState({isDiscardedCandidate: true});
                    this.props.loading(false);                  
                    this.props.removeCandidate(this.props.candidateId);  
                } else {
                    this.props.loading(false);
                }
        })

    }

    render() {        
        return (            
            <DinamicForm {...this.props} onSubmit={this.onSubmit}>
            {
                this.state.isDiscardedCandidate ?
                <div className='text-center'>
                    <i className="fa fa-check-circle text-success mb-3 display-3"></i> 
                    <p className="pb-3">Se eliminado al candidato correctamente</p>
                </div>
                :
                <div>
                    <CandidateDeleteProcessForm />
                    <div className="text-center">
                        <button 
                            type="button" 
                            className="btn btn-outline-danger mr-3" 
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
                            className="btn btn-danger"
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

CandidateDeleteProcessContainer.proptypes = {
    formId: PropTypes.string.isRequired
}


const mapStateToProps = (state, ownProps) => {
    return {
        form: ownProps.formId,
        submitting: state.globals.loading,
        candidateName: state.modal.data.candidateName || '',
        candidateEmail: state.modal.data.candidateEmail || '',
        candidateId: state.modal.data.candidateId
    }
}


const mapDispatchToProps = (dispatch) =>  {
    return {
        loading: (loading) => {
            dispatch(isLoading(loading));
        },
        removeCandidate: (candidateId) => {
            dispatch(removeCardCandidate(candidateId))
        },
        onOpenModal: (show) => {
            dispatch(setVisibilityModal(show))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CandidateDeleteProcessContainer);