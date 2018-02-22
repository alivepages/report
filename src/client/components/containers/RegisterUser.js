import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset, isSubmitting } from 'redux-form';
import { Alert } from 'reactstrap';
//import { register } from '../../redux/actions/RegisterAction';
import { asyncValidateConfirmPassword } from '../forms/Validate/AsyncValidate';
import RecaptchaContainer from './RecaptchaContainer';
import { app_base_url } from '../../../utils/api/config';

// Forms components
import DinamicForm from '../forms/DinamicForm';
import RegisterForm from '../forms/RegisterForm';


class RegisterUserContainer extends React.Component {

    constructor() {
        super();

        this.state = {
            error: false,
            success: false,
            recaptchaError: false
        }

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(values) {

        let formdata = values;

        this.setState({
            error: false
        });

        if(!this.props.recaptchaValue) {

            this.setState({
                recaptchaError: true
            });

           return;

        } else {

            this.setState({
                recaptchaError: false
            });

            formdata['ReCaptcha'] = this.props.recaptchaValue;
        }


        return fetch('/registro',{
            method: 'post',
            body: JSON.stringify(values),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            credentials: 'same-origin'
        })
        .then((res) => {

            if(res.status === 200) {

                this.props.resetForm();

                this.setState({
                    success: true
                });

            } else {

                this.setState({
                    error: true
                });

            }

        })
        .catch((error) => {
            return Promise.reject(error);
            console.log(error);
        });

    }

    render() {

        return(
          <div>
            <DinamicForm {...this.props} onSubmit={this.onSubmit}>

                <RegisterForm />

                <RecaptchaContainer onChangeCaptcha={this.onChangeCaptcha}/>

                <div className="form-group">
                    <button
                        type="submit"
                        disabled={this.props.submitting}
                        className="btn btn-primary btn-block"
                        >
                        Crear mi cuenta
                        { this.props.submitting ? <i className="fa fa-spinner fa-pulse fa-lg fa-fw float-right"></i> : null }

                    </button>
                </div>


                { this.state.success ?

                    <Alert color="success" className="text-center">
                        <small>Te hemos enviado un correo, por favor verifica tu bandeja, para poder iniciar sesión.</small>
                    </Alert>

                : null

                }

                { this.state.recaptchaError ?

                    <Alert color="danger" className="text-center">
                        <small>Debes completar el reCaptcha para continuar.</small>
                    </Alert>

                : null

                }

                { this.state.error ?

                    <Alert color="danger" className="text-center">
                        <small>Este usuario ya existe.</small>
                    </Alert>

                : null

                }
 
            </DinamicForm> 
            <a className="font-xs color-graylight text-center active" target="_blank" href={`${app_base_url}/resources/privacy/Terminos_condiciones_aviso_privacidad_empresas_Yooin2018®.pdf`}>Al regístrate aceptas nuestros términos y condiciones, así como nuestra política de privacidad.</a>
          </div>
        )

    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        form: ownProps.formId,
        asyncValidate: asyncValidateConfirmPassword,
        submitting: isSubmitting(ownProps.formId)(state),
        initialValues: {
            Role: "Administrador"
        },
        recaptchaValue: state.recaptcha
    }
}


const mapDispatchToProps = (dispatch, ownProps) =>  {
    return {
        resetForm: () => {
            dispatch(reset(ownProps.formId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterUserContainer);
