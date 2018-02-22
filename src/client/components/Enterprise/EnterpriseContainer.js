import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    createElementMultiselect,
    initDataMultiselect,
    changeValueMultiselect
} from '../../redux/actions/Multiselect';
import { initialize, change, registerField } from 'redux-form';
import request from 'superagent';
import Enterprise from './Enterprise';
import ModalR from '../Modal/ModalRedux';
// Redux Actions
import { isLoading } from '../../redux/actions/Globals';
import { setVisibilityModal } from '../../redux/actions/Modal';

class EnterpriseContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            page: 1,
            industryType: [],
            industrieSize: [],
            benefitType: [],
            username: '',
            seconds: 5,
            enterprise: {},
            isEditable:false,
            enterpriseData:{}
        }
        this._onSubmit = this._onSubmit.bind(this);
    }

    componentWillMount() {

        if(this.props.hasOwnProperty('enterprise_isEditable')) {

            var data = {};
            var location = {};
            var catalog = [];

            for(var i = 0; i < this.props.enterprise.EnterpriseBenefit.length; ++i) {
                catalog.push({
                    Id: this.props.enterprise.EnterpriseBenefit[i].BenefitId,
                    Name: this.props.enterprise.EnterpriseBenefit[i].Name
                });
            }

            location = {
                Name: this.props.enterprise.Location !== null ? this.props.enterprise.Location : ''
            }

            data['EnterpriseName'] = this.props.enterprise.Name;
            data['EnterpriseShortName'] = this.props.enterprise.ShortName;
            data['Location'] = location;
            data['IndustryType'] = this.props.enterprise.IndustryType;
            data['EnterpriseSizeType'] = this.props.enterprise.EnterpriseSizeType;
            data['Description'] = this.props.enterprise.Description;
            data['Description'] = this.props.enterprise.Description;
            data['Benefits'] = catalog;

            for(var i = 0; i < this.props.enterprise.EnterpriseSocialNetwork.length; ++i) {
                if(this.props.enterprise.EnterpriseSocialNetwork[i].Name === 'Website')
                    data['NetworkLink'] = this.props.enterprise.EnterpriseSocialNetwork[i].Url;
                else if(this.props.enterprise.EnterpriseSocialNetwork[i].Name === 'Linkedin')
                    data['NetworkLinkedin'] = this.props.enterprise.EnterpriseSocialNetwork[i].Url;
                else if(this.props.enterprise.EnterpriseSocialNetwork[i].Name === 'Facebook')
                    data['NetworkFacebook'] = this.props.enterprise.EnterpriseSocialNetwork[i].Url;
                else if(this.props.enterprise.EnterpriseSocialNetwork[i].Name === 'Twitter')
                    data['NetworkTwitter'] = this.props.enterprise.EnterpriseSocialNetwork[i].Url;
                else if(this.props.enterprise.EnterpriseSocialNetwork[i].Name === 'Instagram')
                    data['NetworkInstagram'] = this.props.enterprise.EnterpriseSocialNetwork[i].Url;
                else if(this.props.enterprise.EnterpriseSocialNetwork[i].Name === 'Youtube')
                    data['NetworkYoutube'] = this.props.enterprise.EnterpriseSocialNetwork[i].Url;
            }

            this.props.loadValues('enterprise', data);
            this.props.change("enterprise", "Places", data.Location);

            this.setState({
                enterpriseData: this.props.enterprise
            })
        }
    }

    componentDidMount() {

        this.setState({
            industryType: JSON.parse(this.props.industryType),
            industrieSizes: JSON.parse(this.props.industrieSize),
            benefitType: JSON.parse(this.props.benefitType)
        });

        // this.props.AddName('enterprise', 'Name', this.props.name);
    }



    _onSubmit(values) {

        let SocialNetworks = [];
        let linkedIn = '';

        if(values.hasOwnProperty('LinkedinUri')) {
            linkedIn = 'https://linkedin.com/in/' + values.LinkedinUri;
        }

        if(values.hasOwnProperty('NetworkLink')) {
            SocialNetworks.push({
                SocialNetworkTypeId: "1",
                Url: values.NetworkLink
            });
        }

        if(values.hasOwnProperty('NetworkFacebook')) {
            SocialNetworks.push({
                SocialNetworkTypeId: "2",
                Url: values.NetworkFacebook
            });
        }

        if(values.hasOwnProperty('NetworkInstagram')) {
            SocialNetworks.push({
                SocialNetworkTypeId: "3",
                Url: values.NetworkInstagram
            });
        }

        if(values.hasOwnProperty('NetworkLinkedin')) {
            SocialNetworks.push({
                SocialNetworkTypeId: "4",
                Url: values.NetworkLinkedin
            });
        }

        if(values.hasOwnProperty('NetworkTwitter')) {
            SocialNetworks.push({
                SocialNetworkTypeId: "5",
                Url: values.NetworkTwitter
            });
        }

        if(values.hasOwnProperty('NetworkYoutube')) {
            SocialNetworks.push({
                SocialNetworkTypeId: "6",
                Url: values.NetworkYoutube
            });
        }



        if(this.props.hasOwnProperty('enterprise_isEditable')) {

            values["EnterpriseId"] = this.state.enterpriseData.Id;

            this.setState({
                enterprise: {}
            });

            let dataProfiles = {
                values: values,
                enterpriseSocialNetworks: SocialNetworks,
                userLinkedInUri: linkedIn
            };

            request
                .post(`/actualizar_empresa`)
                .send(JSON.stringify(dataProfiles))
                .set('Content-Type', 'application/json')
                .end((err, res) => {
                    if(err) {
                        console.log('Vuelve a intentarlo');
                        return;
                    }

                    if(res.status == 200) {
                        this.props.toggleModal({
                            data: {},
                            show: true
                        });

                    }
                    else{
                        console.log("No se pudo crear la empresa");
                    }
                });

        } else {

            values["EnterpriseId"] = 0;

            let dataProfiles = {
                values: values,
                enterpriseSocialNetworks: SocialNetworks,
                userLinkedInUri: linkedIn
            };

            request
                .post(`/registrar_empresa`)
                .send(JSON.stringify(dataProfiles))
                .set('Content-Type', 'application/json')
                .end((err, res) => {

                    if(err) {
                        console.log('Vuelve a intentarlo');
                        return;
                    }

                    if(res.status == 200) {

                        setInterval(() => {

                            this.setState({
                                seconds: this.state.seconds - 1
                            })

                            if(this.state.seconds === 0) {
                                this.props.toggleModal({
                                    data: {},
                                    show: false
                                });
                                window.location.href = '/dashboard_vacantes';
                            }

                        }, 1000);
                    }
                    else{
                        console.log("No se pudo crear la empresa");
                    }
                });

        }

    }

    render(){

        const {
            industryType, industrieSizes,
            benefitType, phoneCodes, countries,
            seconds, enterpriseData
        } = this.state;


        console.log(enterpriseData);

        return (
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="card boxshadow-xs">
                        <div className="yc-profile-card__header text-center h3 p-3">
                            <h3>Acerca de tu Organización</h3>
                        </div>
                        <div className="pr-5 pl-5 pt-4 pb-4">
                            <Enterprise
                                industrieSizes={industrieSizes}
                                industryType={industryType}
                                benefitType={benefitType}
                                onSubmit={this._onSubmit}
                                shortName={enterpriseData.ShortName}
                            />
                        </div>
                    </div>

                    <ModalR
                        isOpen={this.props.openModal.show}
                        toggle={this.props.toggleModal}
                    >
                        <div className="text-center">
                            <i className="fa fa-check-circle text-success mb-3 display-3"></i>
                            <p className="h3 pb-3 text-success">¡Todo listo!</p>
                            <p>Se ve genial el perfil de tu empresa.</p>


                            {this.props.hasOwnProperty('enterprise_isEditable') ?

                            <div>
                                <p className="text-success">Guardado Correctamente<strong></strong></p>
                                <div className="text-center">
                                    <a  href="#"
                                        onClick={()=> this.props.toggleModal( {data:{}, show:false}) }
                                        className="btn btn-primary"
                                    >
                                        Aceptar
                                    </a>
                                </div>
                            </div>
                            :
                            <div>
                                <p><strong>Ahora te ayudaremos a crear tu primera vacante.</strong></p>
                                <p className="text-success">Te redirigiremos en: <strong>{seconds}</strong></p>
                            </div>
                            }
                        </div>
                    </ModalR>
                </div>
            </div>
        )

    }
}


const mapStateToProps = (state) => {
    return {
        openModal: state.modal
    }
}


const mapDispatchToProps = (dispatch) =>  {
    return {
        toggleModal: (data) => {
            dispatch(setVisibilityModal(data))
        },
        isLoading: (loading) => {
            dispatch(isLoading(loading));
        },
        loadValues: (form, data) => {
            dispatch(initialize(form, data));
        },
        change: (formId, field, value) => {
            dispatch(change(formId, field, value))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterpriseContainer);
