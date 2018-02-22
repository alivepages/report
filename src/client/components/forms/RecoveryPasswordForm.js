import React from 'react';
import { Field, reduxForm } from 'redux-form';

// Components
import { RenderField } from './Fields/RenderField';
import { Required, email, password, } from './Validate/Validate';

let RecoveryPasswordForm = () => {
    
    return (
        <div className="pt-3 pb-3 pl-4 pr-4">
    
            <Field 
                name="Email" 
                component={RenderField}
                validate={[Required, email]}
                type="email" 
                label="Correo electrónico"
                placeholder="correo@ejemplo.com"
                maxLength={256} 
                className="form-control" 
            />
        </div>
    )
}

export default RecoveryPasswordForm;
