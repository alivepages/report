import React from 'react';
import PropTypes from 'prop-types';

// Components
import CandidateCardDismiss from './CandidateCardDismiss';


let CandidateCardDataSection = (props) => {

    const { candidateId, name, email, experience, salary, postulation, date, urlReporte } = props;

    let salaryFormat = (salary !== null || salary) ? `${salary.Minimum} - ${salary.Maximum} ${salary.CurrencyId}` : '-';

    return(
        <div className="d-flex h-100 pl-2 pr-2 flex-column">
            <div className="mb-4">
                <div className="row">
                    <div className="col-10 col-sm-11">
                        <p className="card-title mb-0">
                          <a href={urlReporte}>
                            {name}
                          </a>
                        </p>
                        <small className="text-muted">{email}</small>
                    </div>
                    <div className="col-2 col-sm-1 pl-1">
                        <CandidateCardDismiss
                            candidateId={candidateId}
                            candidateName={name}
                            candidateEmail={email}
                        />
                    </div>
                </div>

            </div>
            <div>
                <div className="d-sm-flex flex-row justify-content-between pl-3 pl-sm-0">
                    <small className="text-uppercase text-muted ye-size-small d-block d-sm-inline mb-3 mb-sm-0">
                        <span className="d-block">Experiencia</span>
                        <span className="mt-2">{experience}</span>
                    </small>
                    <small className="text-uppercase text-muted ye-size-small d-block d-sm-inline mb-3 mb-sm-0">
                        <span className="d-block">Sueldo ideal</span>
                        <span className="mt-2">{salaryFormat}</span>
                    </small>
                    <small className="text-uppercase text-muted d-block d-sm-inline ye-size-small mb-2 mb-sm-0">
                        <span className="d-block">Postulación</span>
                        <span className="mt-2">{postulation}</span>
                    </small>
                </div>
            </div>
        </div>
    )
};

CandidateCardDataSection.defaultProps = {
    name: 'Nombre del candidato',
    email: 'email@dominio.com',
    experience: '-',
    salary: '-',
    postulation: '-'
};

CandidateCardDataSection.proptypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    experience: PropTypes.string,
    salary: PropTypes.string,
    postulation: PropTypes.string,
    date: PropTypes.string
};

export default CandidateCardDataSection;
