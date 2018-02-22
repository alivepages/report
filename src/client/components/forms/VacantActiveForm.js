import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

// Components
import { RenderField } from './Fields/RenderField';
import { Required, email, password, } from './Validate/Validate';

let VacantActiveForm = (props) => {

    return (
        <div>
            <div className="row mb-3">
                <div className="col-sm-12">
                    <p>
                        Al activar está vacante podrá estar pública, disponible para invitar a postular y evaluar más personas. 
                    </p>
                </div>
            </div>
        </div>
    )

}

export default VacantActiveForm;