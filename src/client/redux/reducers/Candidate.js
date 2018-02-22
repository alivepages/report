import {
    LOAD_CANDIDATE_DASHBOARD, 
    REMOVE_CARD_CANDIDATE,
    NEW_CANDIDATE,
    SET_CANDIDATE_STATUS
} from '../actions/types';


const initialState = {
    candidate:[],
    status: {}
};

export default function loadCandidate(state = initialState, action) {
    switch (action.type) {
        case LOAD_CANDIDATE_DASHBOARD:
            return Object.assign({}, state, {
                candidate: action.DataCandidates,
            });

        case REMOVE_CARD_CANDIDATE:            
            var CandidatesFounded = state.candidate.filter(item => item.Candidate.Id != action.candidateId)            
            return Object.assign({}, state, {
                candidate: CandidatesFounded,
            });

        case NEW_CANDIDATE:
            var prevState = state.candidate;
            var newCandidate = {};
            
            if (action.candidate.Id === 0) {
                var lastCandidate = state.candidate[state.candidate.length - 1];            
                action.candidate.Id = lastCandidate != null ? lastCandidate.Candidate.Id + 1 : 1;
            }                        

            newCandidate.Candidate = action.candidate;
            return Object.assign({}, state, {
                candidate: prevState.concat(newCandidate),
            });

        case SET_CANDIDATE_STATUS:
            return Object.assign({}, state, {
                status: action.status
            });
        
        default:
            return state;
    }
}