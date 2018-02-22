import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { DropdownList } from 'react-widgets';
import ImageUpload from '../containers/ImageUpload';

// Components
import {
    RenderField, RenderSelectField, RenderFieldSocialIcon,
    RenderMultiselectField, RenderInputGroupField
} from './Fields/RenderField';
import { Required, email, password, whiteSpace } from './Validate/Validate';
import TabsNetwork from '../TabsNetwork';
import GooglePlaces from '../containers/GooglePlaces';

let EnterpriseProfileForm = (props) => {

    return (
        <div>
            <div className="row mb-3">
                <div className="col-sm-12">
                    <p>Completa la información relevante para dar vida al perfil de tu Organización, donde se mostrarán tus vacantes.</p>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-sm-12">
                    <Field
                        name="EnterpriseName"
                        component={RenderField}
                        validate={[Required]}
                        type="text"
                        maxLength={250}
                        label="Nombre de tu organización"
                        className="form-control"
                        isRequired={true}
                    />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-sm-12">
                    <GooglePlaces formId={props.formId} />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-sm-6">
                    <Field
                        name="IndustryType"
                        component={RenderSelectField}
                        validate={[Required]}
                        data={props.industryType || []}
                        label="Industria"
                        className="form-control"
                        textField="Name"
                        isRequired={true}
                    />
                </div>
                <div className="col-sm-6">
                    <Field
                        name="EnterpriseSizeType"
                        component={RenderSelectField}
                        validate={[Required]}
                        label="Tamaño de tu Organización"
                        data={props.industrieSizes || []}
                        textField="Size"
                        valueField="Id"
                        className="form-control"
                        isRequired={true}
                    />
                </div>
            </div>

            {/*
            <div className="row mb-4">
                <div className="col-sm-3">
                    <p><small>Logotipo (mín. 500x500 px)</small></p>
                    <ImageUpload full={false}/>
                </div>
                <div className="col-sm-9">
                    <p><small>Foto de portada (tamaño sugerido mín. 1280x360 px)</small></p>
                    <ImageUpload full={true}/>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-sm-12">
                    <p>Tu logotipo y foto de portada se mostrará en tu perfil de empresa que impulsará a destacar tus vacantes para candidatos.</p>
                </div>
            </div>
            */}

            <div className="row mb-4">
                <div className="col-sm-12">
                    <Field
                        name="Description"
                        placeholder="Ejemplo:  Yooin® es la plataforma preferida por Pequeñas Empresas, Startups o Negocios sin áreas de RH que buscan crecer su Negocio al seleccionar el mejor Talento afín de manera fácil y confiable. Te encantará colaborar con nosotros pues el impacto de tu trabajo ayudará a miles de personas, además nos gusta trabajar cómodos, en un ambiente relajado y siempre buscamos nuevos retos."
                        component={RenderField}
                        type="textarea"
                        label="¿Por qué trabajar en tu Organización? (Descripción breve)"
                        maxLength={1000}
                        className="form-control"
                    />
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-sm-12 ye-multiselect--tag">
                    <p className="h5 font-weight-bold mb-3">Diferenciadores de tu Organización</p>
                    <p>Selecciona algunos Beneficios o prestaciones a destacar que brinda tu Organización</p>
                    <Field
                        name="Benefits"
                        component={RenderMultiselectField}
                        validate={[Required]}
                        label="Selecciona algunos Beneficios Laborales"
                        data={props.benefitType || []}
                        msgNew="(Clic aquí para crear nuevo)"
                        emptyFilter="No se encontró ninguna coincidencia"
                        className="form-control"
                        textField="Name"
                        isRequired={true}
                    />
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-sm-12">
                    <p className="h5 font-weight-bold mb-3">Sitios o Redes Sociales</p>
                    <p>Selecciona y agrega los links donde puedan conocer mejor a tu Organización.</p>
                    <TabsNetwork />
                </div>
            </div>

            { props.editProfile ?

                <div className="row">
                    <div className="col-sm-12">
                        <div className="row">
                            <div className="col-sm-12">
                                <p className="h5 font-weight-bold mb-3">Multimedia</p>
                                <p>Comparte videos que permitan conocer la cultura de tu empresa como es trabajar en ese lugar, colaboradores, instalaciones, recuerda a los candidatos les encantaría saber que es trabajar en tu empresa y su próximo equipo.</p>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <Field
                                    name="Video"
                                    component={RenderField}
                                    label="URL de video empresarial o de tu cultura)"
                                    type="text"
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-sm-6">
                                <p><small>Agrega Fotos de tu cultura (Hasta 6)</small></p>
                            </div>
                        </div>
                    </div>
                </div>

            : null

            }

        </div>
    )
}

export default EnterpriseProfileForm;
