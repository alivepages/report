import {
    GET_USER_AVATAR,
    IMAGE_ONDRAG_ENTER,
    IMAGE_ONDRAG_LEAVE,
    IMAGE_UPLOADING,
    IMAGE_UPLOADED
} from '../actions/types';

const initialState = {
    file: null,
    files: [],
    uploading: false,
    active: false
};

export default function imageUpload(state = initialState, action) {

    switch(action.type) {
        case GET_USER_AVATAR:
            return [
                ...initialState,
                {
                    file: action.payload
                }
            ]
            
        case IMAGE_ONDRAG_ENTER:
            return [
                ...state,
                {
                    active: action.active
                }
            ]

        case IMAGE_ONDRAG_LEAVE:
            return [
                ...state,
                {
                    active: action.active
                }
            ]

        case IMAGE_UPLOADING:
            return [
                ...state,
                {
                    uploading: true
                }
            ]

        case IMAGE_UPLOADED:
            return [
                ...state,
                {
                    uploading: false
                }
            ]

        default:
            return state;
        
    }
};