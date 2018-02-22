import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { DropdownList } from 'react-widgets';
import ImageUpload from '../containers/ImageUpload';

// Components
import {
    RenderField, RenderSelectField,
    RenderFieldSocialIcon
} from './Fields/RenderField';
import {
    Required, email, password,
    validatePhoneLength, NumberType
} from './Validate/Validate';

let ProfileForm = (props) => {
    return (
        <div>
            <div className="row mb-2">
                <div className="col-sm-3">
                    <ImageUpload full={false} {...props}/>
                    <p className="text-center"><small>Subir foto</small></p>
                </div>
                <div className="col-sm-9">
                    <div className="row">
                        <div className="col-sm-6">
                            <Field
                                name="Name"
                                component={RenderField}
                                validate={[Required]}
                                type="text"
                                label="Nombre completo"
                                className="form-control"
                                isRequired={true}
                            />
                        </div>
                        <div className="col-sm-6">
                            <Field
                                name="Job"
                                component={RenderField}
                                validate={[Required]}
                                type="text"
                                label="Puesto"
                                maxLength={100}
                                className="form-control"
                                isRequired={true}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <Field
                                name="Country"
                                component={RenderSelectField}
                                data={props.countries || []}
                                validate={[Required]}
                                label="País de residencia"
                                className="form-control"
                                textField="Name"
                                valueField="IdCountry"
                                isRequired={true}
                                onChange={props.onChangeCountries}
                            />
                        </div>
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-sm-12">
                                    <label>
                                        Teléfono Celular o Móvil <span className="ye-bad-icon">*</span>
                                    </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4 pr-0">
                                    <Field
                                        name="PhoneCode"
                                        component={RenderSelectField}
                                        validate={[Required]}
                                        data={props.phoneCodes || []}
                                        className="form-control"
                                        textField="PhoneCode"
                                    />
                                </div>
                                <div className="col-sm-8 mr-0">
                                    <Field
                                        name="Phone"
                                        component={RenderField}
                                        validate={[Required, NumberType, validatePhoneLength]}
                                        type="text"
                                        maxLength={20}
                                        className="form-control"                                        
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileForm;
