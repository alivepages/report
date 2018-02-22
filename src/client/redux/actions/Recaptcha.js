import { RECAPTCHA_VALIDATE  } from './types';


export const getRecaptchResponse = validate => {

    return {
        type: RECAPTCHA_VALIDATE,
        validate
    }
};