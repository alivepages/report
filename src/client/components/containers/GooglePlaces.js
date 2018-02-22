import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, change, registerField, getFormValues } from 'redux-form';
import request from 'superagent';
import apiUrl from '../../../utils/api/config';

// Components
import { RenderCombobox } from '../forms/Fields/RenderField';
import { Required } from '../forms/Validate/Validate';


class GooglePlaces extends React.Component {
    constructor() {
        super();

        this.state = {
            places:[],
            busy: false,
            value: { Name: '' },
            currentSearchPosition: 5
        };

        this.onSearchLocation = this.onSearchLocation.bind(this);
        this.onSelectLocation = this.onSelectLocation.bind(this);
    }

    componentWillMount() {

        const { values, registerField } = this.props;

        if(values !== undefined && values.Location !== undefined) {

            this.setState({
                value: values.Location.Name
            });

            return;
        }

        registerField(this.props.formId, 'Location', 'Field');
    }

    onSearchLocation(value){

        this.setState({
            value: value.Name || value
        });

        const minimumLengthSearch = 5;

        if( value != "" && value.length >= minimumLengthSearch ){

            if (value.length === this.state.currentSearchPosition + minimumLengthSearch
                || value.length === this.state.currentSearchPosition - minimumLengthSearch
                || value.length === this.state.currentSearchPosition) {

                this.setState({
                    places: [],
                    busy: true
                });

                request
                    .get(`/googleLocation?value=${value}`)
                    .end((err, res) => {
                        if (res.statusCode === 200) {
                            this.setState({
                                places: res.body,
                                currentSearchPosition: value.length
                            });
                        }else{
                            this.setState({
                                currentSearchPosition: value.length
                            });
                        }
                    });
            }

            this.setState({
                busy: false
            });

        }
    }

    onSelectLocation(valueSelected){

        let nameLocation = valueSelected.Name;

        this.setState({
            value: { Name: nameLocation },
            busy: false
        });

        this.props.change(this.props.formId, "Location" ,valueSelected)
    }


    render() {

        let { busy, places, value } = this.state;

        return(
            <Field
                name="Places"
                component={RenderCombobox}
                data={places || []}
                //validate={[Required]}
                label={this.props.titulo ? this.props.titulo : "Ubicación (Sede)"}
                valueField="Name"
                textField="Name"
                placeholder="Busca colonia o localidad cercana"
                onSelect={this.onSelectLocation}
                onSearch={this.onSearchLocation}
                emptyList="No se han encontrado resultados, completa la palabra y da enter para intentar de nuevo"
                valor={value}
                busy={busy}
                isRequired={true}
                type="address"
            />
        )
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        values: getFormValues(ownProps.formId)(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        change: (formId, field, value) => {
            dispatch(change(formId, field, value))
        },
        registerField: (formId, field, type) => {
            dispatch(registerField(formId, field, type))
        }
    }
};

GooglePlaces.prototypes = {
    formId: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(GooglePlaces);
