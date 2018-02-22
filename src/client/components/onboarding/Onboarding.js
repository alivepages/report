import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { change, arrayPush } from 'redux-form';
import { setVisibilityModal } from '../../redux/actions/Modal';

// Components
import Dots from '../Dots';
import OnboardingFirstPage from './OnboardingFirstPage';
import OnboardingSecondPage from './OnboardingSecondPage';
//import ModalContainer from '../containers/ModalContainer';
import ModalR from '../Modal/ModalRedux';

// Redux Actions
import { isLoading } from '../../redux/actions/Globals';

class Onboarding extends React.Component {
    constructor(props) {
        super(props);

        this.nextPage = this.nextPage.bind(this)
        this.previousPage = this.previousPage.bind(this)
        this.handleChangeCountries = this.handleChangeCountries.bind(this);
        this.filterPhoneByCountry = this.filterPhoneByCountry.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
          page: 1,
          industryType: [],
          phoneCodes: [],
          countriesCode: [],
          industrieSize: [],
          benefitType: [],
          username: '',
          seconds: 5,
          isNotValidateShorname: false,
          shortNameMessage: ''
        }
    }

    componentDidMount() {

        this.setState({
            industryType: JSON.parse(this.props.industryType),
            phoneCodes: JSON.parse(this.props.phoneCodes),
            countriesCode: JSON.parse(this.props.countries),
            industrieSizes: JSON.parse(this.props.industrieSize),
            username: this.props.name,
            benefitType: JSON.parse(this.props.benefitType)
        });

        this.props.AddName('onboarding', 'Name', this.props.name);
    }

    componentDidUnmount() {
        clearInterval();
    }

    filterPhoneByCountry(idCountry) {
        return (value) => {
            return value.IdCountry === idCountry;
        }
    }

    handleChangeCountries(e) {

        var phoneCodes = this.state.phoneCodes;
        var idCountry = e.IdCountry;

        var phoneCodeByCountry = phoneCodes.filter(this.filterPhoneByCountry(idCountry));

        this.props.changePhoneCodeByCountry(
            'onboarding',
            'PhoneCode',
            phoneCodeByCountry[0]
        );

    }

    nextPage() {
        this.setState({ page: this.state.page + 1 })
    }

    previousPage() {
        this.setState({ page: this.state.page - 1 })
    }

    onSubmit(values) {

        let SocialNetworks = [];
        let linkedIn = '';

        this.props.isLoading(true);

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

        let dataProfiles = {
            values: values,
            enterpriseSocialNetworks: SocialNetworks,
            userLinkedInUri: linkedIn
        };


        fetch('/complete_account',{
            method: 'post',
            body: JSON.stringify(dataProfiles),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            credentials: 'same-origin'
        })
        .then((res) => {

            if(res.status === 200) {

                this.props.isLoading(false);

                this.props.toggleModal({
                    data: {},
                    show: true
                });

                setInterval(() => {

                    this.setState({
                        seconds: this.state.seconds - 1
                    })

                    if(this.state.seconds === 0) {
                        this.props.toggleModal({
                            data: {},
                            show: false
                        });
                        window.location.href = '/crear_vacante';
                    }

                }, 1000);
            } 
        })
        .catch((error) => {            
            return Promise.reject(error);
        });

    }

    render() {

        const {
            page, phoneCodes, countriesCode,
            industryType, industrieSizes,
            seconds, benefitType
        } = this.state;

        return (

            <div>
                <Dots total={2} page={page} />
                <div className="card boxshadow-xs">

                    { page === 1 &&
                        <OnboardingFirstPage
                            phoneCodes={phoneCodes}
                            countriesCode={countriesCode}
                            onChangeCountries={this.handleChangeCountries}
                            onSubmit={this.nextPage}
                            name={this.state.username}
                        />
                    }

                    { page === 2 &&
                        <OnboardingSecondPage
                            industryType={industryType}
                            industrieSizes={industrieSizes}
                            benefitType={benefitType}
                            previousPage={this.previousPage}
                            onSubmit={this.onSubmit}
                        />
                    }

                    <ModalR
                        showHeader={false}
                        isOpen={this.props.openModal.show}
                        toggle={this.props.onOpenModal}
                    >
                        <div className="text-center">
                            <i className="fa fa-check-circle text-success mb-3 display-3"></i>
                            <p className="h3 pb-3 text-success">¡Todo listo!</p>
                            <p>¡Listo, tu cuenta ha sido configurada!</p>
                            <p><strong>Ahora te ayudaremos a crear tu primera vacante.</strong></p>
                            <p className="text-success">Te redirigiremos en: <strong>{seconds}</strong></p>
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
        changePhoneCodeByCountry: (form, field, value) => {
            dispatch(change(form, field, value))
        },
        AddName: (form, field, value) => {
            dispatch(arrayPush(form, field, value));
        },
        toggleModal: (data) => {
            dispatch(setVisibilityModal(data))
        },
        isLoading: (loading) => {
            dispatch(isLoading(loading));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Onboarding);
