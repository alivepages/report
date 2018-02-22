import { GET_VACANT_EDIT } from '../actions/types';

export default function vacantReducer(state = [], action) {
    switch(action.type) {
        case GET_VACANT_EDIT:
        return [
            ...state,
            {
                data: action.data
            }
        ]
        default:
            return state
    }
}

export const load = data => ({ type: LOAD, data })