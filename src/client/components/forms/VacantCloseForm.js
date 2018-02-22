import React from 'react';
import { Field, reduxForm } from 'redux-form';

// Components
import { RenderField } from './Fields/RenderField';
import { Required, email, password, } from './Validate/Validate';

let VacantCloseForm = () => {

    return (
        <div>
            <div className="row mb-3">
                <div className="col-sm-12">
                    <p>
                      Al confirmar el estado de tu vacante cambiará a “CERRADO”. La vacante no estará visible en tu perfil de empresa, ni podrás evaluar o postular más candidatos. Aún puedes acceder a los datos de la vacante. Para “Activar” de nuevo tu vacante “Cerrada” o “Inactiva” solo cambia su estado a “Activa” siempre y cuando tengas vacantes activas disponibles en tu membresía o plan.
                    </p>
                    <p>
                      No olvides informar a tus candidatos que no fueron seleccionados, descartarlos del proceso, para notificarles te lo agradecerán.
                    </p>
                </div>
            </div>
        </div>
    )

}

export default VacantCloseForm;
