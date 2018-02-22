import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, isSubmitting } from 'redux-form';
import { isLoading } from '../../redux/actions/Globals';
import request from 'superagent'
import { setVisibilityModal } from '../../redux/actions/Modal';
import { setVacantStatus } from '../../redux/actions/Vacant';

// Forms components
import DinamicForm from '../forms/DinamicForm';
import VacantActiveForm from '../forms/VacantActiveForm';

class CandidateActiveContainer extends React.Component {

    constructor() {
        super();

        this.state = {
            isVacantActive: false
        }

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(values) {
        this.props.loading(true);

        var data = {
            Id: this.props.vacantId            
        }        

        request
            .post('/activar_vacante')
            .send(data)
            .set('application/json')
            .end((err, res) => {
                if (res.statusCode == 200) {
                    this.setState({isVacantActive: true});
                    this.props.changeVacantStatus(this.props.vacantStatus);
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
                this.state.isVacantActive ?
                <div className='text-center'>
                    <i className="fa fa-check-circle text-success mb-3 display-3"></i> 
                    <p className="pb-3">La vacante ha sido activada.</p>
                </div>
                :
                <div>
                    <VacantActiveForm />
                    <div className="text-center">
                        <button type="button" className="btn btn-outline-success mr-3" 
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
                            className="btn btn-success"
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

CandidateActiveContainer.proptypes = {
    formId: PropTypes.string.isRequired    
}


const mapStateToProps = (state, ownProps) => {
    return {
        form: ownProps.formId,
        submitting: state.globals.loading,
        vacantId: state.modal.data.vacantId || 0,
        vacantStatus: state.modal.data.statusVacantObj || {}   
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
        changeVacantStatus: (obj) => {
            dispatch(setVacantStatus(obj))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CandidateActiveContainer);