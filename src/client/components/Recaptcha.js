import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

let Recaptcha = (props) => {

    return(
        <ReCAPTCHA
            sitekey="6LeT6iYUAAAAAONVivaNtFFtxmao1l_02Zp2daKI"
            onChange={ props.onChangeCaptcha }
            className="mb-4 ye-recaptcha"
        />
    )
};

export default Recaptcha;