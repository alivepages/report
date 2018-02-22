import React from 'react';
import PropTypes from 'prop-types';

// Forms components
import  RegisterUserContainer from './containers/RegisterUser';

class Register extends React.Component {
   
    render() {

        return(
            <div>
                <RegisterUserContainer formId='register' />
            </div>
        )

    }
}

export default Register;