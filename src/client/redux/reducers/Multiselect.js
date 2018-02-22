import { 
    INIT_DATA_MULTISELECT, 
    CREATE_ELEMENT_MULTISELECT,
    CHANGE_VALUE_MULTISELECT
} from '../actions/types';

const initialState = {
    data: [],
    value: []
}

export default function multiselect(state = initialState, action) {
    
    switch(action.type) {
        case INIT_DATA_MULTISELECT:
            return [
                ...state,
                {
                    data: action.payload
                }
            ]
        case CHANGE_VALUE_MULTISELECT:
            return [
                ...state,
                {
                    value: action.payload
                }
            ]
        case CREATE_ELEMENT_MULTISELECT:
            return [
                ...state,
                {
                    value: action.payload,
                    data: action.payload
                }
            ]
        default:
            return state
    }
}