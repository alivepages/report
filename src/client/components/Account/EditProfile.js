import React from 'react';
import request from 'superagent'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { setVisibilityModal } from '../../redux/actions/Modal';
import { reduxForm, change, propTypes } from 'redux-form';
import { Alert } from 'reactstrap';

import ProfileForm from '../forms/ProfileForm';
import ModalR from '../Modal/ModalRedux';

import { isLoading } from '../../redux/actions/Globals';

class EditProfile extends React.Component {
    constructor(props) {
        super(props);

        this.handleChangeCountries = this.handleChangeCountries.bind(this);
        this.filterPhoneByCountry = this.filterPhoneByCountry.bind(this);        
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {   
          phoneCodes: [],
          countriesCode: [],
          userProfile: [],          
          username: '',
          error: false            
        }
    }

    componentDidMount() {        

        this.setState({
            phoneCodes: JSON.parse(this.props.phoneCodes),
            countriesCode: JSON.parse(this.props.countries),
            username: this.props.name,
        });
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
            'editProfile',
            'PhoneCode',
            phoneCodeByCountry[0]
        );

    }

    onSubmit(values) {
        this.props.isLoading(true);
        
        request
            .post('/update_profile')
            .send(values)
            .set('application/json')
            .end((err, res) => {
                if (res.statusCode == 200) {
                    this.props.toggleModal({
                        data: {},
                        show: true
                    });
                    
                    setInterval(() => 
                        this.props.toggleModal({
                            show: false
                        }), 3000                        
                    )

                } else {                                                                             

                    this.setState({
                        error: true
                    });
            
                    setInterval(() => this.setState({error: false}), 3000);                    
                }
        });

        this.props.isLoading(false);
    }


    render() {
        
        let firstName = this.state.username.split(" ")[0];

        const {handleSubmit, isSubmit} = this.props;

        return (

            <div>
                <div className="card boxshadow-xs">
                    <div className="yc-profile-card__header text-center h3 p-3">
                        <h3>¡Hola, {firstName}!</h3>
                    </div>
                    <div className="pr-5 pl-5 pt-4 pb-4">
                        <div className="text-center mb-5">
                            <p>Completa la información de tu perfil como Administrador para configurar tu cuenta.</p>
                        </div>
                        <form onSubmit={handleSubmit(this.onSubmit)}>
                            <ProfileForm
                                countries={this.state.countriesCode}
                                phoneCodes={this.state.phoneCodes}
                                onChangeCountries={this.handleChangeCountries}
                                avatarUserUrl={this.props.avatarUserUrl}
                                avatarUser={this.props.avatarUser}
                            />

                            <ModalR
                                showHeader={false}
                                isOpen={this.props.openModal.show}
                                toggle={this.props.onOpenModal}
                            >
                                <div className="text-center">
                                    <i className="fa fa-check-circle text-success mb-3 display-3"></i>
                                    <p className="h3 pb-3 text-success">¡Todo listo!</p>
                                    <p>¡Los datos de tu cuenta han sido actualizados!</p>                                    
                                </div>
                            </ModalR>

                            { this.state.error ?

                            <Alert color="danger" className="text-center">
                                <small>Los datos no pudieron ser actualizados, intenta nuevamente</small>
                            </Alert>

                            : null    
                            }

                            <div className="row">
                                <div className="col-lg-8">
                                    Los campos con (*) son obligatorios
                                </div>                                
                                <div className="col-lg-4 text-right">
                                    <button type="submit" className="btn btn-primary-p">
                                        Guardar
                                        { isSubmit ? <i className="fa fa-spinner fa-pulse ml-1 fa-fw"></i> : null }
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>            
        )
    }
}

EditProfile = reduxForm({
    form: 'editProfile', // <------ same form name
})(EditProfile);

EditProfile = connect(
    (state, ownProps) => {
        return {
            initialValues: {
                "Name": ownProps.name,
                "Job": ownProps.userProfileData.Job,
                "Country": ownProps.userProfileData.IdCountry,
                "PhoneCode": ownProps.userProfileData.PhoneCode,
                "Phone": ownProps.userProfileData.Phone            
            },
            openModal: state.modal, 
            isSubmit: state.globals.loading                     
        }
    }
    ,
    (dispatch) => {

        return {
            changePhoneCodeByCountry: (form, field, value) => {
                dispatch(change(form, field, value))
            },   
            toggleModal: (data) => {
                dispatch(setVisibilityModal(data))
            },
            isLoading: (loading) => {
                dispatch(isLoading(loading));
            }
        }
    }
)(EditProfile);

export default EditProfile;