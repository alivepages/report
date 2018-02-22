import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import VacantForm from '../forms/VacantForm';
import { validateMaxValue } from '../forms/Validate/AsyncValidate';

let VacantFirstStep = (props) => {

    const { 
        handleSubmit, hiringType, experiences,
        educationLevels, currencyCatalog, benefitType,
        languageCatalog, loading, expertType, isFiltering
    } = props;

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <VacantForm 
                    hiringType={hiringType}
                    experiences={experiences}
                    educationLevels={educationLevels}
                    currencyCatalog={currencyCatalog}
                    benefitType={benefitType}
                    languageCatalog={languageCatalog}
                    title="Cuéntanos acerca del Talento que buscas"
                    submitting={loading}
                    expertType={expertType}
                    formId="vacant"
                />
            </form>
        </div>
    )
};

VacantFirstStep = reduxForm({
    form: 'vacant',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
})(VacantFirstStep);

VacantFirstStep = connect(
    state => ({
        loading: state.globals.loading
    })
)(VacantFirstStep);

export default VacantFirstStep;