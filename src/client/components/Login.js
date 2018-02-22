import React from 'react';
import PropTypes from 'prop-types';

// Components
import LoginContainer from './containers/LoginContainer';
import RecoveryPasswordContainer from './containers/RecoveryPasswordContainer';
import ModalBtnContainer from './containers/ModalBtnContainer';
import ModalContainer from './containers/ModalContainer';

class Login extends React.Component {

    render() {

        return(
            <div>
                <LoginContainer formId='Login' />
                <ModalContainer 
                    title='Recupera tu contraseña' 
                    showHeader={true}
                    typeButton="link" 
                    textButton="¿Olvidaste tu contraseña?"
                >
                    <RecoveryPasswordContainer formId='RecoveryPassword' /> 
                </ModalContainer>
            </div>
        )

    }
}

export default Login;
