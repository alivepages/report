import { SET_VISIBILITY_MODAL  } from './types';


export const setVisibilityModal = modalObj => {

    return {
        type: SET_VISIBILITY_MODAL,
        modalObj
    }
};
