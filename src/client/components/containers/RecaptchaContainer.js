import React from 'react';
import { connect } from 'react-redux';
import { getRecaptchResponse } from '../../redux/actions/Recaptcha';

import Recaptcha from '../Recaptcha';

const mapStateToProps = (state) => {
    
    return {
        validate: state.validate
    }

};
    
const mapDispatchToProps = (dispatch, ownProps) => {

    return {
        onChangeCaptcha: (validate) => {
            dispatch(getRecaptchResponse(validate))
        }
    }
};

const RecaptchaContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Recaptcha);

export default RecaptchaContainer;