import React from 'react';
import { Field, reduxForm } from 'redux-form';

// Components
import { RenderField } from './Fields/RenderField';
import { Required, password, } from './Validate/Validate';

let ChangePasswordForm = () => {
    
    return (
        <div>
            <Field 
                name="NewPassword" 
                component={RenderField}
                validate={[Required, password]}
                type="password" 
                label="Contraseña nueva"
                className="form-control" 
            />

            <Field 
                name="ConfirmPassword" 
                component={RenderField}
                validate={[Required, password]}
                type="password" 
                label="Repite tu contraseña"
                className="form-control" 
            />
        </div>
    )
}

export default ChangePasswordForm;
