import { SET_VISIBILITY_MODAL } from '../actions/types';

const initialState = {
    data: {},
    show: false
}

export default function modal(state = initialState, action) {
    
    switch(action.type) {
        case SET_VISIBILITY_MODAL:
            return Object.assign({}, state, {
                data: action.modalObj.data,
                show: action.modalObj.show
            })
        default:
            return state
    }
}

