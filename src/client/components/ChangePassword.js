import React from 'react';
import ChangePasswordContainer from './containers/ChangePasswordContainer';

let ChangePassword = (props) => {
    
    return (
        <div className="pt-3 pb-3 pl-4 pr-4">
            <ChangePasswordContainer {...props} formId="changepassword" /> 
        </div>
    )
}

export default ChangePassword;
