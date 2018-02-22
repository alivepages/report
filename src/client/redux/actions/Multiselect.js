import { 
    INIT_DATA_MULTISELECT, 
    CREATE_ELEMENT_MULTISELECT,
    CHANGE_VALUE_MULTISELECT
} from './types';


export const createElementMultiselect = payload => {

    return {
        type: CREATE_ELEMENT_MULTISELECT,
        payload
    }
};

export const initDataMultiselect = payload => {

    return {
        type: INIT_DATA_MULTISELECT,
        payload
    }
};

export const changeValueMultiselect = payload => {
    return {
        type: CHANGE_VALUE_MULTISELECT,
        payload
    }
}