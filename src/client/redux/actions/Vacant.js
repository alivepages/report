import { SETJOBTYPEID, SET_VACANT_STATUS, LOAD_VACANTS  } from './types';


export const setJobTypeId = id => {

    return {
        type: SETJOBTYPEID,
        id
    }
};

export const setVacantStatus = status => {
    return {
        type: SET_VACANT_STATUS,
        status
    }
};

export const loadVacants = (dataVacants) => {
    return {
        type: LOAD_VACANTS,
        dataVacants
    }
}
