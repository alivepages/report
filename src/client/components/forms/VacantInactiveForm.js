import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

// Components
import { RenderField } from './Fields/RenderField';
import { Required, email, password, } from './Validate/Validate';

let VacantInactiveForm = (props) => {

    return (
        <div>
            <div className="row mb-3">
                <div className="col-sm-12">
                    <p>
                        Al confirmar el estado de tu vacante cambiará a “INACTIVO”. La vacante no estará visible en tu perfil de empresa, ni podrás evaluar o postular más candidatos. Ya no podrás acceder a los datos de está vacante.
                    </p>
                    <p>
                        Recuerda marcar como “Cerrada o “Inactiva” las vacantes que ya no ocupes para poder tener nuevas vacantes disponibles en tu siguiente renovación de vacantes.
                    </p>
                </div>
            </div>
        </div>
    )

}

export default VacantInactiveForm;
