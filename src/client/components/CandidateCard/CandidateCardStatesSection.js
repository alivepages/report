import React from 'react';
import PropTypes from 'prop-types';

// Components
import CandidateState from './CandidateCardCandidateState';
import CandidateCardLike from './CandidateCardLike';
import CandidateReportShare from './CandidateReportShare';


let CandidateCardStatesSection = (props) => {

    let { 
        completed, processid, candidateId, 
        candidateName, candidateEmail, vacantId, opinions
    } = props;

    return(

        <div className="d-flex flex-row justify-content-between rounded-bottom pt-2 mt-2 ye-candidate-card-states">
            <div>
                <CandidateState
                    candidateId={candidateId}
                    candidateName={candidateName}
                    process={processid}
                    candidateEmail={candidateEmail}
                    enterpriseProcessState={props.enterpriseProcessState}
                />
            </div>

            { completed ? 

            <div>
                <small className="text-danger ye-size-small">El candidato aún no termina sus evaluaciones.</small>
            </div>
            
            :

            <div>
                <CandidateCardLike
                    opinions={opinions}
                    vacantId={vacantId}
                    candidateId={candidateId}
                />

                <CandidateReportShare
                     candidateId={candidateId}
                     candidateName={candidateName}
                     process={processid}
                     vacantId={vacantId}
                />
                
            </div>
            
            }

        </div>

    )
};

CandidateCardStatesSection.defaultProps = {
    completed: false,
    processid: 1
};

CandidateCardStatesSection.proptypes = {
    opinions: PropTypes.array,
    vacantId: PropTypes.number,
    candidateId: PropTypes.number,
    completed: PropTypes.bool,
    processid: PropTypes.number
};

export default CandidateCardStatesSection;