import {
    LOAD_CANDIDATE_DASHBOARD, 
    REMOVE_CARD_CANDIDATE,
    NEW_CANDIDATE,
    SET_CANDIDATE_STATUS
} from './types';

export const loadCandidateDashboard = (DataCandidates) => {
    return {
        type: LOAD_CANDIDATE_DASHBOARD,
        DataCandidates
    }
};

export const removeCardCandidate = (candidateId) => {
    return {
        type: REMOVE_CARD_CANDIDATE,
        candidateId
    }
};

export const newCandidate = (candidate) => {
    return {
        type: NEW_CANDIDATE,
        candidate
    }
};

export const setCandidateStatus = (status) => {
    return {
        type: SET_CANDIDATE_STATUS,
        status
    }
};