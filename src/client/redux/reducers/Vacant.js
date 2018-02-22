import { SETJOBTYPEID, SET_VACANT_STATUS, LOAD_VACANTS } from '../actions/types';

const initialState = {
    id: 0,
    status: {},
    vacants: []
};

export default function jobtype(state = initialState, action) {
    
    switch(action.type) {
        case SETJOBTYPEID:
            return Object.assign({}, state, {
                id: action.id
            });

        case SET_VACANT_STATUS:
            return Object.assign({}, state, {
                status: action.status
            });

        case LOAD_VACANTS:
            return Object.assign({}, state, {                
                vacants: action.dataVacants
            })

        default:
            return state;
    }
}