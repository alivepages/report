import { REGISTER_SUCCESS, REGISTER_FAILURE } from '../actions/types';

export default function registerReducer(state = [], action) {
    switch(action.type) {
        case REGISTER_SUCCESS:
            return [
                ...state,
                {
                    isRegister: true,
                    error: null
                }
            ]
        case REGISTER_FAILURE:
            return [
                ...state,
                {
                    isRegister: false,
                    error: action.error
                }
            ]
        default:
            return state
    }
}