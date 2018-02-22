import React from 'react';
import { Field, reduxForm } from 'redux-form';

// Components
import { RenderField } from './Fields/RenderField';
import { Required, email, password, } from './Validate/Validate';

let ResetPasswordForm = () =>{
    return (
        <div>
            <Field 
                name="Email" 
                component={RenderField}
                validate={[Required, email]} 
                type="email" 
                label="Correo electrónico"
                placeholder="correo@ejemplo.com" 
                className="form-control" 
            />
        </div>
    )
}