import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, change, registerField, getFormValues } from 'redux-form';
import request from 'superagent';
import apiUrl from '../../../utils/api/config';

//Components
import { RenderCombobox, RenderMultiselectField, RenderMultiselectAddField } from '../forms/Fields/RenderField';
import { Required } from '../forms/Validate/Validate';
import { log } from 'util';

let expertsArray = [];

class VacantExperts extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            experts: [],
            busy: false,
            value: {Name: '', Id: 0}
        };

        this.onSearchExperts = this.onSearchExperts.bind(this);
        this.onCreateExperts = this.onCreateExperts.bind(this);
    }


    onSearchExperts(value){
        if(value.replace(" ","") == "") {
            this.setState({
                busy: false,
                experts: []
            });
            return;
        }

        this.setState({
            busy: true,
            value: {Name:value}
        });
        request
        .get(`/habilidades_tecnicas?value=${value}`)
        .end((err, res) => {
            if(res.statusCode === 200){

                for (var i = 0; i < res.body.length; i+=1) {

                    var noExiste = (this.state.experts.findIndex(x=>x.Id === res.body[i].Id) === -1);
                    
                    if( noExiste ){
                            experts: this.state.experts.push(res.body[i])
                    }
                }
                this.setState({
                    busy: false
                });
            }
        });
    }

    onCreateExperts(valueCreated){
        let { experts, value } = this.state;

        request
        .post('/crear_habilidad_tecnica')
        .withCredentials( 'same-origin' )
        .send({
            IdLanguage: 'es',
            IdCountry:  'MX',
            Name:       valueCreated
        })
        .end((err, res) => {
            if(res.statusCode === 200){
                if(res.body != null){
                    let bodyParse = res.body;
                    let newExpert ={
                        Name: bodyParse.Name,
                        Id: bodyParse.Id
                    }

                    this.state.experts.unshift(newExpert);
                    this.setState({
                        value: [...value, newExpert],
                        //  experts: [...experts, newExpert]
                        experts: this.state.experts
                    });
                }
            }
        });

    }

    render() {
        let { busy, experts, value } = this.state;
        return(
            <Field
                name="Experts"
                component={RenderMultiselectAddField}
                data={experts}
                //validate={[Required]}
                label="Agrega Habilidades o Conocimientos clave"
                valueField="Id"
                textField="Name"
                onSearch={this.onSearchExperts}
                onCreate={this.onCreateExperts}
                emptyFilter="No se encontró ninguna coincidencia"
                emptyList="No se encontró ninguna coincidencia"
                msgNew={`Agrega la opción "${value.Name}" con un enter`}
                values={value}
                busy={busy}
                isRequired={true}
            />
        )
    }

}

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

VacantExperts.prototypes = {
    formId: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(VacantExperts);
