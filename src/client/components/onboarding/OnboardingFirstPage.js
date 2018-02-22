import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import ProfileForm from '../forms/ProfileForm';

const OnboardingFirstPage = (props) => {

    const { handleSubmit, phoneCodes, countriesCode, onChangeCountries, name } = props

    let username = name.split(" ")[0];

    return (
        <div>
            <div className="yc-profile-card__header text-center h3 p-3">
                <h3>¡Hola, {username}!</h3>
            </div>
            <div className="pr-5 pl-5 pt-4 pb-4">
                <div className="text-center mb-5">
                    <p>Completa la información de tu perfil como Administrador para configurar tu cuenta.</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <ProfileForm
                        countries={countriesCode}
                        phoneCodes={phoneCodes}
                        onChangeCountries={onChangeCountries}
                    />

                    <div className="row">
                        <div className="col-lg-8">
                            Los campos con (*) son obligatorios
                        </div>
                        <div className="col-lg-4 text-right">
                            <button type="submit" className="btn btn-primary-p">
                                Siguiente
                            </button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default reduxForm({
    form: 'onboarding',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
})(OnboardingFirstPage)
