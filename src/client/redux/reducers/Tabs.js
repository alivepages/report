import { SET_VISIBILITY_TAB } from '../actions/types';


export default function activeTab(state = '1', action) {
    
    switch(action.type) {
        case SET_VISIBILITY_TAB:
            return action.activeTab
        default:
            return state
    }
}

