import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment'


// Components
import CardDataSection from './CandidateCardDataSection';
import CardStates from './CandidateCardStatesSection';
import Avatar from '../Avatar';


let CandidateCard = (props) => {

    let { processStateId, candidate, postulationDate,
        affinityPercentage, opinions, vacantId } = props;
    let affinity = affinityPercentage !== null || affinityPercentage ? affinityPercentage : '0';

    let urlReporte = '#';
    if (affinity > 0) {
      urlReporte = '/reporte_candidatos?u=' + candidate.Id + '&v=' + vacantId;
    }

    let evaluationCompleted = (affinityPercentage != null) ? false : true;


    return(

        <div className="card boxshadow-xs">
            <div className="card-body">
                <div className="d-flex">
                    <div className="w-25 text-center">
                        <a href={urlReporte}>
                        <Avatar
                            center={true}
                            width="64"
                            height="64"
                            url={candidate.ImageUrl}
                        />
                        </a>
                        <p className="pt-3">
                          <a href={urlReporte}>
                            <span className="h4 mb-0 d-block text-primary">{affinity}%</span>
                            <small className="text-muted ye-size-small">Afinidad</small>
                          </a>
                        </p>
                    </div>
                    <div className="w-75">
                        <CardDataSection
                            candidateId={candidate.Id}
                            name={candidate.Name}
                            email={candidate.Email}
                            salary={candidate.CandidateSalary}
                            postulation={moment(postulationDate).format('DD/MM/YYYY')}
                            experience={candidate.ExperienceYears !== null ? `${candidate.ExperienceYears} año(s)` : '-'}
                            urlReporte={urlReporte}
                        />
                    </div>
                </div>
                <CardStates
                    opinions={opinions}
                    vacantId={vacantId}
                    candidateId={candidate.Id}
                    candidateName={candidate.Name}

                    candidateEmail={candidate.Email}
                    completed={evaluationCompleted}

                    processid={processStateId}
                    enterpriseProcessState={props.enterpriseProcessState}
                />
            </div>
        </div>
    )
};

CandidateCard.proptypes = {
    opinions: PropTypes.array,
    processStateId: PropTypes.number,
    candidate: PropTypes.object,
    postulationDate: PropTypes.string,
    affinityPercentage: PropTypes.string
};

export default CandidateCard;
