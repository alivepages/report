import { 
    IS_LOADING, COMPETENCES_REPOSITORY, OPEN_MENU
} from '../actions/types';

const initialState = {
    loading: false,
    competences: [],
    candidate: {},
    menuOpened: false
};

export default function loading(state = initialState, action) {
    switch(action.type) {
        case IS_LOADING:
            return {
                loading: action.loading
            }
        case COMPETENCES_REPOSITORY:
            return {
                competences: action.competences
            }
        case OPEN_MENU:
            return {
                menuOpened: action.open
            }
        default:
            return state
    }
};