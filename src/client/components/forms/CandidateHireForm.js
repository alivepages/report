import React from 'react';
import { Field, reduxForm } from 'redux-form';

// Components
import { RenderField } from './Fields/RenderField';
import { Required, email, password, } from './Validate/Validate';

let CandidateHireForm = (props) => {

    return (
        <div>
            <div className="row mb-3">
                <div className="col-sm-12">
                    <p>
                    Estas por contratar a <strong>{props.candidateName}</strong> para la Vacante de <strong>{props.vacantName}</strong>.
                    Al conﬁrmar notificaremos por correo de esta buena noticia a tu candidato.
                    </p>
                </div>
            </div>
        </div>
    )

}

export default CandidateHireForm;
