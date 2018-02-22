import React from 'react';
import { Field, reduxForm } from 'redux-form';
import EnterpriseProfileForm from '../forms/EnterpriseProfileForm';

const Enterprise = props => {

    const { handleSubmit, pristine, reset, submitting,
            industryType, industrieSizes,
            benefitType, phoneCodes, countries,
            shortName} = props;
    return(
        <form onSubmit={handleSubmit}>
        
            <EnterpriseProfileForm
                industrieSizes={industrieSizes}
                industryType={industryType}
                benefitType={benefitType}
                formId='enterprise'
            />

            <div className="row">
                <div className="col-lg-12 text-right">
                    Los campos con (*) son obligatorios
                </div>
            </div>

            <div className="row">            
                <div className="col-sm-6 pt-3 text-center text-sm-left">
                { shortName != null ?                    
                    <a href={`empresa?nombre=${shortName}`}
                        target="_blank" 
                        className="btn mb-3 mb-sm-0 btn-primary-p"
                    >
                        Vista Empresa
                    </a>
                : 
                    null
                }
                </div>

                <div className="col-sm-6 pt-3 text-center text-sm-right">
                    <button                        
                        className="btn btn-primary-p">
                        Guardar
                       
                    </button>
                </div>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'enterprise'
})(Enterprise);