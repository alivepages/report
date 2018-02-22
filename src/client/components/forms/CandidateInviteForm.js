import React from 'react';
import { Field, reduxForm } from 'redux-form';

// Components
import { RenderField } from './Fields/RenderField';
import { Required, email, password, } from './Validate/Validate';

let CandidateInviteForm = () => {

    return (
        <div className="pt-3 pb-3 pl-4 pr-4">
            <Field 
                name="CandidateName" 
                component={RenderField}
                validate={[Required]}
                type="text" 
                label="Nombre del candidato"
                className="form-control" 
            />

            <Field 
                name="CandidateEmail" 
                component={RenderField}
                validate={[Required, email]}
                type="email" 
                label="Correo electrónico del candidato"
                placeholder="correo@ejemplo.com" 
                className="form-control" 
            />

        </div>
    )

}

export default CandidateInviteForm;