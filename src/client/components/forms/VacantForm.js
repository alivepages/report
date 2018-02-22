import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, isSubmitting } from 'redux-form';

// Components
import {
    RenderField,
    RenderSelectField,
    RenderInputGroupField,
    RenderMultiselectField,
    RenderCheckbox,
    RenderMultiselect,
    RenderCombobox
 } from './Fields/RenderField';
import { Required, password, NumberType, validateSalary } from './Validate/Validate';
import GooglePlaces from '../containers/GooglePlaces';
import VacantExperts from '../containers/VacantExperts';

let VacantForm = (props) => {

    return (
        <div>
            <div className="card boxshadow-xs">
                <div className="yc-profile-card__header text-center h3 p-3">
                    <h3>{ props.title }</h3>
                </div>
                <div className="pr-4 pl-4 pt-2 pb-3">
                    <p className="h5 mb-3">Tipo de talento que necesitas</p>
                    <div className="row">
                        <div className="col-sm-6">
                            <Field
                                name="VacantName"
                                component={RenderField}
                                validate={[Required]}
                                maxLength={100}
                                type="text"
                                label='Título de la vacante'
                                placeholder="Ejemplo: Desarrollador Web"
                                className="form-control"
                                isRequired={true}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="card boxshadow-xs">
                <div className="pr-4 pl-4 pt-4 pb-2">
                    <p className="h5 mb-3">Lo necesario para la posición</p>

                    <div className="col-lg-12">
                            <div>
                                <GooglePlaces formId={props.formId} titulo="Ubicación"/>
                            </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">

                            <div className="row">
                                <div className="col-sm-12 col-lg-4">
                                    <Field
                                        name="Department"
                                        component={RenderField}
                                        validate={[Required]}
                                        maxLength={128}
                                        type="text"
                                        label="Área o Departamento"
                                        className="form-control"
                                        isRequired={true}
                                    />
                                </div>
                                <div className="col-sm-12 col-lg-4">
                                    <Field
                                        name="HiringType"
                                        component={RenderSelectField}
                                        data={props.hiringType || []}
                                        validate={[Required]}
                                        label="Tipo de Contratación"
                                        className="form-control"
                                        textField="Name"
                                        valueField="Id"
                                        isRequired={true}
                                        onChange={props.onChangeCountries}
                                    />
                                </div>
                                <div className="col-sm-4 col-lg-4">
                                    <Field
                                        name="YearsExperience"
                                        component={RenderSelectField}
                                        data={props.experiences || []}
                                        validate={[Required]}
                                        label="Experiencia"
                                        className="form-control"
                                        textField="Name"
                                        valueField="Id"
                                        isRequired={true}
                                        onChange={props.onChangeCountries}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6 ye-multiselect--tag">
                            <Field
                                name="Description"
                                component={RenderField}
                                validate={[Required]}
                                type="textarea"
                                label="Descripción breve"
                                placeholder="Ejemplo: Se busca Asesor comercial con experiencia en venta de Tecnología."
                                className="form-control"
                                maxLength="341"
                                isRequired={true}
                            />
                            <VacantExperts
                                formId={props.formId}
                                expertType={props.expertType || []}
                            />
                        </div>
                        <div className="col-sm-6">
                            <Field
                                name="Responsabilities"
                                component={RenderField}
                                validate={[Required]}
                                type="textarea"
                                label="¿Cuáles son sus responsabilidades clave?"
                                className="ye-responsibilities-field"
                                maxLength="1000"
                                isRequired={true}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6 ye-multiselect--tag">
                            <Field
                                name="Languages"
                                component={RenderMultiselectField}
                                label="Selecciona Idiomas necesarios"
                                data={props.languageCatalog || []}
                                msgNew="(Clic aquí para crear nuevo)"
                                emptyFilter="Selecciona un idioma del catálogo"
                                className="form-control"
                                textField="Name"
                                valueField="IdLanguage"
                            />
                        </div>
                        <div className="col-sm-6">
                            <Field
                                name="EducationLevel"
                                component={RenderSelectField}
                                data={props.educationLevels || []}
                                validate={[Required]}
                                label="Selecciona el Nivel de estudios mínimo requerido"
                                className="form-control"
                                textField="Name"
                                valueField="Id"
                                onChange={props.onChangeCountries}
                                isRequired={true}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="card boxshadow-xs">
                <div className="pr-4 pl-4 pt-4 pb-2">
                    <p className="h5 mb-3">Transmite lo increíble.</p>
                    <div className="row">
                        <div className="col-md-12 ye-multiselect--tag">
                            <Field
                                name="VacantBenefits"
                                component={RenderMultiselectField}
                                validate={[Required]}
                                label="Selecciona Beneficios a destacar de la vacante"
                                data={props.benefitType || []}
                                msgNew="(Clic aquí para crear nuevo)"
                                emptyFilter="Selecciona un beneficio"
                                className="form-control"
                                textField="Name"
                                valueField="Id"
                                isRequired={true}
                            />
                        </div>

                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-sm-4">
                                    <Field
                                        name="VacanteSalaryMin"
                                        component={RenderInputGroupField}
                                        validate={[Required, NumberType]}
                                        label="Salario Mín"
                                        type="text"
                                        icon="fa fa-dollar"
                                        iconLeft={true}
                                        className="form-control"
                                        isRequired={true}
                                    />
                                </div>
                                <div className="col-sm-4">
                                    <Field
                                        name="VacanteSalaryMax"
                                        component={RenderInputGroupField}
                                        validate={[Required, NumberType, validateSalary]}
                                        label="Salario Máx"
                                        type="text"
                                        icon="fa fa-dollar"
                                        iconLeft={true}
                                        className="form-control"
                                        isRequired={true}
                                    />
                                </div>
                                <div className="col-sm-4">
                                    <Field
                                        name="Cash"
                                        component={RenderSelectField}
                                        data={props.currencyCatalog || []}
                                        validate={[Required]}
                                        label="Moneda"
                                        className="form-control"
                                        textField="CurrencyCode"
                                        valueField="CurrencyCode"
                                        onChange={props.onChangeCountries}
                                        isRequired={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 offset-md-12 text-right">
                            <Field
                                name="showSalary"
                                type="checkbox"
                                component={RenderCheckbox}
                                className="switch-3d switch-secondary"
                            />
                            <small> Mostrar Salario en la vacante (Recomendable)</small>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-8">
                    Los campos con (*) son obligatorios
                </div>
                <div className="col-lg-4 text-right">
                    <button
                        type="submit"
                        disabled={props.submitting}
                        className="btn btn-primary-p"
                    >
                        Siguiente
                        { props.submitting ? <i className="fa fa-spinner fa-pulse fa-fw ml-1"></i> : null }
                    </button>
                </div>
            </div>

        </div>
    )
}

export default VacantForm;
