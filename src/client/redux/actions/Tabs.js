import { SET_VISIBILITY_TAB  } from './types';


export const setVisibilityTab = activeTab => {

    return {
        type: SET_VISIBILITY_TAB,
        activeTab
    }
};