import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, isSubmitting } from 'redux-form';
import TooltipInfo from './TooltipIconInfo';
// Components
import {
    RenderField,
    RenderSelectField
 } from './forms/Fields/RenderField';
import { Required, password, } from './forms/Validate/Validate';

let ProfileCompetencesLibrary =(props) => {

        const {
            title,
            positionLevel, functionalArea, positionType,
            onChangedPositionLevel, onChangedFunctionalArea, onChangedPositionType
        } = props;

        return(
            <div className="card boxshadow-xs">
                <div className="yc-profile-card__header text-center h3 p-3">
                    <h3>{ title }</h3>
                </div>
                <div className="pr-4 pl-4 pt-2 pb-3">
                    <p className="mb-3">Tipo de Talento que necesitas</p>
                    <TooltipInfo
                        toolId = "tip"
                        toolIcon="fa fa-lightbulb-o"
                        tooltipText = "Tip: En caso de no encontrar el puesto que buscas, en Área Funcional selecciona un puesto Estándar, diseñado con las competencias base para evaluar de acuerdo al Nivel de puesto que necesitas. "
                        textContent = "Selecciona uno de nuestros perfiles de éxito, probados en el Mercado Laboral, para evaluar las competencias clave necesarias para tu puesto. Solo necesitas elegir el nivel de puesto, el área funcional y el puesto tipo o rol similar al que necesitas."
                        position = {"bottom"}
                        toolStyle = " "
                    />
                    <div className="row">
                        <div className="col-sm-4">
                            <Field
                                name="PositionLevel"
                                component={RenderSelectField}
                                data={positionLevel || []}
                                validate={[Required]}
                                label="Nivel de Puesto*"
                                className="form-control"
                                textField="Name"
                                valueField="Id"
                                onChange={onChangedPositionLevel}
                            />
                        </div>
                        <div className="col-sm-4">
                            <Field
                                name="FunctionalArea"
                                component={RenderSelectField}
                                data={functionalArea || []}
                                validate={[Required]}
                                label="Área Funcional*"
                                className="form-control"
                                textField="Name"
                                valueField="Id"
                                onChange={onChangedFunctionalArea}
                            />
                        </div>
                        <div className="col-sm-4">
                            <Field
                                name="PositionType"
                                component={RenderSelectField}
                                data={positionType}
                                validate={[Required]}
                                label="Puesto Tipo*"
                                className="form-control"
                                textField="Name"
                                valueField="Id"
                                onChange={onChangedPositionType}
                            />
                        </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <small>
                          <i class="fa fa-exclamation-triangle fa-lg text-warning mr-1" aria-hidden="true"></i>
                            Una vez elegido el perfil que deseas evaluar al publicar tu vacante ya no podrás editarlo.
                        </small>
                      </div>
                    </div>
                </div>
            </div>
        );

}

export  default ProfileCompetencesLibrary;
