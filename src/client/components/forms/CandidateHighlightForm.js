import React from 'react';
import { Field, reduxForm } from 'redux-form';

// Components
import { RenderField } from './Fields/RenderField';
import { Required, email, password, } from './Validate/Validate';

let CandidateHighlightForm = (props) => {

    return (
        <div>
            <div className="row mb-3">
                <div className="col-sm-12">
                    <p>
                    ¡Le avisaremos a tu candidato <strong>{props.candidateName}</strong>, al confirmar el cambio de etapa le notificaremos por correo que lo has seleccionado como un candidato destacado, no olvides ponerte en contacto para siguientes pasos en tu proceso de selección!
                    </p>
                </div>
            </div>
        </div>
    )

}

export default CandidateHighlightForm;
