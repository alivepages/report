import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';
import { connect } from 'react-redux';
import {
    createElementMultiselect,
    initDataMultiselect,
    changeValueMultiselect
} from '../../redux/actions/Multiselect';
import { Field, reduxForm } from 'redux-form';
import EnterpriseProfileForm from '../forms/EnterpriseProfileForm';

let OnboardingSecondPage = (props) => {

    const {
        handleSubmit, previousPage,
        initialData, value,
        createElement, changeValue,
        industryType, industrieSizes,
        getData, isSubmit, benefitType
    } = props;

    return (
        <div>
            <div className="yc-profile-card__header text-center h3 p-3">
                <h3>Acerca de tu Organización</h3>
            </div>
            <div className="pr-5 pl-5 pt-4 pb-4">
                <form onSubmit={handleSubmit}>
                    <EnterpriseProfileForm
                        industrieSizes={industrieSizes}
                        industryType={industryType}
                        benefitType={benefitType}
                        onCreate={createElement}
                        onChange={changeValue}
                        getData={getData}
                        formId="onboarding"
                    />

                    <div className="row">
                        <div className="col-lg-12 text-right">
                            Los campos con (*) son obligatorios
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6 pt-3 text-left">
                            <button type="button" className="btn btn-outline-secondary" onClick={previousPage}> 
                                Anterior
                            </button>
                        </div>
                        <div className="col-sm-6 pt-3 text-right">                                                
                            <button 
                                type="submit"
                                disabled={isSubmit}
                                className="btn btn-primary-p">
                                Enviar
                                { isSubmit ? <i className="fa fa-spinner fa-pulse ml-1 fa-fw"></i> : null }
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

OnboardingSecondPage = reduxForm({
    form: 'onboarding', // <------ same form name
    destroyOnUnmount: false, // <------ preserve form data
    forceUnregisterOnUnmount: true // <------ unregister fields on unmount
})(OnboardingSecondPage);

OnboardingSecondPage = connect(
    state => {
        return {
            initialData: state.multiselect.data,
            value: state.multiselect.value,
            isSubmit: state.globals.loading
        }
    }
    ,
    {
        createElement: createElementMultiselect,
        changeValue: changeValueMultiselect,
        getData: initDataMultiselect
    }
)(OnboardingSecondPage);

export default OnboardingSecondPage;
