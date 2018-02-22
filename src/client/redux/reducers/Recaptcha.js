import { RECAPTCHA_VALIDATE } from '../actions/types';


export default function recaptcha(state = false, action) {
    
    switch(action.type) {
        case RECAPTCHA_VALIDATE:
            return action.validate
        default:
            return state
    }
}