import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, isSubmitting, hasSubmitFailed } from 'redux-form';
import { Alert } from 'reactstrap';
//import { register } from '../../redux/actions/RegisterAction';

// Forms components
import DinamicForm from '../forms/DinamicForm';
import LoginForm from '../forms/LoginForm';
import LoaderSpinner from '../LoaderSpinner';


class LoginContainer extends React.Component {

    constructor() {
        super();

        this.state = {
            error: false
        }

        this.onSubmit = this.onSubmit.bind(this);

    }

    onSubmit(values) {

        this.setState({
            error: false
        });

        return fetch('/signin',{
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
                window.location.href = '/verificador';
            } else {
                this.setState({
                    error: true
                });
            }
        })
        .catch((error) => {
            return Promise.reject(error);
        });

    }

    render() {

        return (
            <div>
                <DinamicForm {...this.props} onSubmit={this.onSubmit}>
                    <LoginForm />

                    { this.state.error ?

                        <Alert color="danger" className="text-center">
                            <small>El usuario o contraseña es incorrecto</small>
                        </Alert>

                    : null

                    }

                    <div className="form-group">
                        <button
                            type="submit"
                            disabled={this.props.submitting}
                            className="btn btn-primary btn-block"
                        >
                            Iniciar sesión
                            { this.props.submitting ? <i className="fa fa-spinner fa-pulse fa-lg fa-fw float-right"></i> : null }

                        </button>
                    </div>
                </DinamicForm>
            </div>
        )

    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        form: ownProps.formId,
        submitting: isSubmitting(ownProps.formId)(state)
    }
}


const mapDispatchToProps = (dispatch) =>  {
    return {
        LoginClick: (values) => {
            dispatch(register(values))
        }
    }
}

export default connect(mapStateToProps, null)(LoginContainer);
