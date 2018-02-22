import React from 'react';
import { Field, reduxForm } from 'redux-form';

// Components
import { RenderField } from './Fields/RenderField';
import { Required, email, password, } from './Validate/Validate';

let CandidateDeleteProcessForm = () => {

    return (
        <div>
            <div className="row mb-3">
                <div className="col-sm-12">
                    <p>
                        Al confirmar descartar a un candidato se le notificará por correo del cambio de estado en su proceso en tu vacante, además de agradecerle su participación.
                    </p>
                </div>
            </div>
            <div>
                <Field
                    name="ReasonDiscardCandidate"
                    component={RenderField}
                    validate={[Required]}
                    type="Textarea"
                    label="Escribe el Motivo o Razón"
                    className="form-control"
                    maxLength="140"
                />
                <small className="text-muted ye-cursor-pointer ye-reduce-mt-10 d-block mb-4">
                    <i className="fa fa-lock mr-2" />
                    Este motivo no será visible a tu candidato, al escribir tu motivo nos ayudas a mejorar la afinidad de este tipo de puesto.
                </small>
            </div>
        </div>
    )

}

export default CandidateDeleteProcessForm;
