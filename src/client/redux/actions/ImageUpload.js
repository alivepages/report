import {
    GET_USER_AVATAR,
    IMAGE_ONDRAG_ENTER,
    IMAGE_ONDRAG_LEAVE,
    IMAGE_UPLOADING,
    IMAGE_UPLOADED
} from './types';

//import Apiconfig from '../../.././utils/config';


export const getUserAvatar = (payload) => {
    return {
        type: GET_USER_AVATAR,
        payload
    }
};

export const imageOndragEnter = active => {
    return {
        type: IMAGE_ONDRAG_ENTER,
        active
    }
};

export const imageOndragLeave = active => {
    return {
        type: IMAGE_ONDRAG_ENTER,
        active
    }
};

export const imageUploading = payload => {
    return {
        type: IMAGE_UPLOADING
    }
};

export const imageUploaded = payload => {
    return {
        type: IMAGE_UPLOADED
    }
};