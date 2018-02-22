import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm, isSubmitting } from 'redux-form';
import { isLoading } from '../../redux/actions/Globals';

// Forms components
import DinamicForm from '../forms/DinamicForm';
import RecoveryPasswordForm from '../forms/RecoveryPasswordForm';


class RecoveryPasswordContainer extends React.Component {

    constructor() {
        super();

        this.state = {
            passRecovered: false
        }

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(values) {

        this.props.loading(true);

        fetch('/auth/recoveryPassword',{
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        .then((res) => {
             if(res.status === 200) {
                this.props.loading(false);
                this.setState(
                    {
                        passRecovered: true
                    }
                )                    
            }
        })
        .catch((error) => {
            console.log(error);
            this.props.loading(false);
        });
        
    }

    render() {

        return(
            <DinamicForm {...this.props} onSubmit={this.onSubmit}>
            {
                this.state.passRecovered ?
                    <div className='text-center'>
                        <i className="fa fa-check-circle text-success mb-3 display-3"></i> 
                        <p className="pb-3">Tu contraseña ha sido recuperada, por favor revisa tu correo.</p>
                    </div> 
                    :  
                    <div>
                        <RecoveryPasswordForm />
                        <div className="form-group">
                            <button 
                                type="submit" 
                                disabled={this.props.submitting}
                                className="btn btn-primary btn-block"
                            >
                                Recuperar
                                { this.props.submitting ? <i className="fa fa-spinner fa-pulse fa-lg fa-fw float-right"></i> : null }
                            </button>
                        </div>
                    </div>
            }
            </DinamicForm>
        )
        
    }
}

RecoveryPasswordContainer.proptypes = {
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecoveryPasswordContainer);


