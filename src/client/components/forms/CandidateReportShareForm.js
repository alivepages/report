import React from 'react';
import { Field, reduxForm } from 'redux-form';

//Components

import { RenderField } from './Fields/RenderField';
import { Required, email } from './Validate/Validate';

let CandidateReportShareForm = (props) => {

    return(

        <div className="pt-3 pb-3 pl-4 pr-4">
            <p>
                Puedes compartir el Reporte de tu candidato sin los datos de contacto más importantes, solo necesitas copiar la liga y compartirla o enviarlo por correo con la persona que deseas que vea la información de tu candidato, sin necesidad de que tenga cuenta en Yooin®, su vigencia será de 5 días.
            </p>
            <Field
                name="UrlKeyShare"
                component={RenderField}
                validate={[Required]}
                value={props.urlKeyShare}
                type="text"
                label="URL del Reporte Integral de Afinidad para compartir"
                placeholder="correo@ejemplo.com"
                className="form-control"
                disabled
            />

            <Field
                name="RecipientEmail"
                component={RenderField}
                validate={[Required, email]}
                type="email"
                label="Correo electrónico del Destinatario"
                placeholder="correo@ejemplo.com"
                icon="fa fa-at"
                iconLeft={true}
                className="form-control"
            />
        </div>
    )
}

export default CandidateReportShareForm;
