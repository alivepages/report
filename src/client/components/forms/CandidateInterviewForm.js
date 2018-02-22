import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

// Components
import { RenderField } from './Fields/RenderField';
import { Required, email, password, } from './Validate/Validate';

let CandidateInterviewForm = (props) => {

    return (
        <div>
            <div className="row mb-3">
                <div className="col-sm-12">
                    <p>
                        Buenas noticias para tu candidato <strong>{props.candidateName}</strong>, al confirmar el cambio de etapa le notificaremos por correo que ha avanzado en su proceso de esta vacante, no olvides comunicarte con el para darle el seguimiento apropiado para coordinar la Entrevista.
                    </p>
                </div>
            </div>
        </div>
    )

}

CandidateInterviewForm.prototypes = {
    candidateName: PropTypes.string
}

export default CandidateInterviewForm;
