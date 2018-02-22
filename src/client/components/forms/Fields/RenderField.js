import React from 'react';
import { DropdownList, Multiselect, Combobox } from 'react-widgets';
import {
    FormGroup, Label, Input,
    InputGroup, InputGroupAddon
} from 'reactstrap';
import classnames from 'classnames';

export const RenderField = ({input, label, type, placeholder, className, maxLength, isRequired, meta: {touched, error, warning}}) => (
    <FormGroup className={`${touched && (error && "has-danger" ) || "" }`} >

        { label ?
            <Label
                className={`${touched && (error && "text-danger" ) || " " }`}
                htmlFor={input.name}
            >
                {label} {isRequired ? <span className="ye-bad-icon">*</span> : null}
            </Label>
            : null
        }

        { type === 'textarea' ?

        <textarea
            {...input}
            type={type}
            placeholder={placeholder}
            row="10"
            maxLength={ maxLength }
            className={className}
        ></textarea>

        :

        <input
            {...input}
            type={type}
            placeholder={placeholder}
            className={className}
            maxLength={ maxLength }
        />

        }

        { type === 'textarea' && maxLength ? <div className="text-right">{input.value.length}/{maxLength}</div> : null }

        { touched && (error && <span className="form-control-feedback">{error}</span>) }
    </FormGroup>
);

export const RenderFieldSocialIcon = ({input, label, type, icon, sizeicon, placeholder, labelWithIcon, meta: {touched, error, warning}}) => (

    <FormGroup className={`${touched && (error && "has-danger" ) || "" }`}>

        <div className="input-group">

            { !labelWithIcon ? <span className={`btn ${sizeicon} btn-${icon} icon mr-2`}>Linkedin</span> : null }
            <div className="input-group-addon">
                { labelWithIcon ?
                    <span className={`btn ${sizeicon} btn-${icon} icon mr-2`}>Linkedin</span>
                :
                    null
                }
                {label}
            </div>
            <input
                {...input}
                type={type}
                className="form-control"
                placeholder={placeholder}
            />
        </div>
        { touched && (error && <span className="form-control-feedback">{error}</span>) }
    </FormGroup>
);

export const RenderInputGroupField = ({input, props, label, placeholder, type, icon, iconLeft, iconRight, isRequired, meta: {touched, error, warning}}) => (
    <FormGroup className={`${touched && (error && "has-danger" ) || "" }`}>
        {/*<Label htmlFor={input.name}>{label}</Label>*/}
        { label ?
            <Label>{label} {isRequired ? <span className="ye-bad-icon">*</span> : null}</Label>
            : null
        }
        <InputGroup>

            { iconLeft ?

                <InputGroupAddon>
                    <i className={icon}></i>
                </InputGroupAddon>

                : null
            }

             <Input
                {...input}
                type={type}
                placeholder={placeholder}
                state={`${touched && (error && "danger") || "muted" }`}
            />

            { iconRight ?

                <InputGroupAddon>
                    <i className={icon}></i>
                </InputGroupAddon>

                : null
            }

        </InputGroup>
        { touched && (error && <span className="form-control-feedback">{error}</span>) }
    </FormGroup>
);

export const RenderSelectField = ({ input, label, data, valueField, textField, isRequired, meta: { touched, error } }) => (
    <FormGroup className={`${touched && (error && "has-danger" ) || "" }`}>
        { label ?
            <Label>{label} {isRequired ? <span className="ye-bad-icon">*</span> : null}</Label>
            : null
        }

        <DropdownList
            {...input}
            valueField={valueField}
            textField={textField}
            data={data}
            defaultValue={1}
            onChange={input.onChange}
            className={`form-control ${error && "is_invalid" || "" }`}
        />
        { touched && (error && <span className="form-control-feedback">{error}</span>) }
    </FormGroup>
);

export const RenderMultiselectField = ({ input, label, data, valueField, msgNew, emptyFilter, textField, onCreate, isRequired, meta: { touched, error } }) => (
    <FormGroup  className={`${touched && (error && "has-danger" ) || "" }`}>
        { label ?
            <Label>{label} {isRequired ? <span className="ye-bad-icon">*</span> : null}</Label>
            : null
        }
        <Multiselect
            {...input}
            onBlur={() => input.onBlur()}
            value={input.value || []}
            data={data}
            valueField={valueField}
            textField={textField}
            messages={{createOption: msgNew, emptyFilter: emptyFilter}}
            className={`form-control ${error && "is_invalid" || "" }`}
        />
        { touched && (error && <span className="form-control-feedback">{error}</span>) }
    </FormGroup>
);

export const RenderMultiselectAddField = ({ input, label, data, value, valueField, msgNew, emptyFilter, emptyList, textField, onCreate, onSelect, onSearch, busy, isRequired, meta: { touched, error } }) => (
    <FormGroup  className={`${touched && (error && "has-danger" ) || "" }`}>
        { label ?
            <Label>{label} {isRequired ? <span className="ye-bad-icon">*</span> : null}</Label>
            : null
        }
        <Multiselect
            {...input}
            onBlur={() => input.onBlur()}
            value={input.value || []}
            data={data}
            valueField={valueField}
            textField={textField}
            allowCreate="onFilter"
            onSearch={onSearch}
            onSelect={onSelect}
            onCreate={onCreate}
            {...busy ? {busy:true} : {}}
            messages={{createOption: msgNew, emptyFilter: emptyFilter, emptyList: emptyList}}
            className={`form-control ${error && "is_invalid" || "" }`}
        />
        { touched && (error && <span className="form-control-feedback">{error}</span>) }
    </FormGroup>
);

export const RenderCombobox = ({onSearch, onSelect, input, data, valor, valueField, placeholder, emptyList, textField, label, busy, isRequired, type, meta: {touched, error, warning} }) => (
	<FormGroup className={`${touched && (error && "has-danger" ) || "" }`}>
		{ label ?
            <Label>{label} {isRequired ? <span className="ye-bad-icon">*</span> : null}</Label>
            : null
        }
		<Combobox
            className={`rw-widget-input ${type == 'address' ? 'ye-google-place' : ''}`}
            data={data}
            value={valor}
            valueField={valueField}
            textField={textField}
            onBlur={() => input.onBlur()}
            onChange={onSearch}
            onSelect={onSelect}
            placeholder={placeholder}
            messages={{emptyList: emptyList}}
            {...busy ? {busy:true} : {}}
		/>
	{ touched && (error && <span className="form-control-feedback">{error}</span>) }
	</FormGroup>
);


export const RenderCheckbox = ({ input, type, className, meta: { touched, error } }) => (
    <label className={`switch ${className}`}>
        <input {...input} type={type} className="switch-input" value="on" />
        <span className="switch-label"></span><span className="switch-handle"></span>
    </label>
);

{/*
export const RenderListLabel=(

)
*/}