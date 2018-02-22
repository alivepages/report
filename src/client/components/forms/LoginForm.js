import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

// Components
import ShowPassword from './ShowPassword';
import { RenderField } from './Fields/RenderField';
import { Required, email, password, } from './Validate/Validate';

class LoginForm extends Component {
    constructor() {
        super();

        this.state = {
            showPassword: 'password',
            isChecked: true
        };
    }


    showPassword() {

        this.setState({
            isChecked: !this.state.isChecked,
            showPassword: (this.state.isChecked) ? 'text' : 'password'
        });
    }

    render() {

        return (
            <div>

                <Field
                    name="Email"
                    component={RenderField}
                    validate={[Required, email]}
                    type="email"
                    label="Correo electrónico*"
                    placeholder="correo@ejemplo.com"
                    maxLength={256}
                    className="form-control"
                />

                <Field
                    name="Password"
                    component={RenderField}
                    validate={[Required]}
                    type={this.state.showPassword}
                    className="form-control"
                    label="Contraseña*"
                    placeholder="Min. 6 caracteres"
                />

                <ShowPassword showPasswordFunc={this.showPassword.bind(this)} />

            </div>
        )
    }
}

export default LoginForm;
