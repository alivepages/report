import React from 'react';
import PropTypes from 'prop-types';
import request from 'superagent';
import { connect } from 'react-redux';

// Components
import CandidateCard from './CandidateCard';


class CandidateCardContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            vacantsId: [],
            processStatesName: ["Invitado"],
            candidates: []
        };
    }

    componentWillMount() {

        const { vacantId, vacantCode, vacantName } = this.props;

        this.setState({
            vacantsId: this.state.vacantsId.push(vacantId)
        });

        var data = {
            VacantId: this.state.vacantsId,
            ProcessStateName: this.state.processStatesName
        };

    }

    render() {



        let candidatesList = null;

        if(this.props.candidates.length > 0) {
            candidatesList = this.props.candidates.map((candidate) => {
                return(
                    <div key={`${candidate.Candidate.Id}`} className="col-sm-12 col-md-12 col-lg-6 col-xl-4">

                        <CandidateCard
                            opinions={candidate.Opinions || []}
                            candidate={candidate.Candidate}
                            vacantId = {candidate.VacantId}
                            processStateId={candidate.ProcessStateId}

                            postulationDate={candidate.ProcessStateDate}
                            affinityPercentage={candidate.AffinityPercentage}
                            enterpriseProcessState={this.props.enterpriseProcessState}

                        />

                    </div>
                )
            })
        }

        return (
            <div className="row">
                { this.props.candidates.length > 0  ?

                    <div className="col-sm-12">
                        <div className="row">
                            {candidatesList}
                        </div>
                    </div>

                :

                this.props.isFiltering ?
                    <div className="col-sm-12 text-center mb-5 mt-5 text-primary">
                        <i className="fa fa-spinner fa-pulse fa-5x"></i>
                    </div>
                :
                    <div className="col-sm-12 text-center mb-5 mt-5 text-disabled">
                        <i className="fa fa-users display-1" />
                        <p>Invita candidatos a tu vacante.</p>
                    </div>

                }
            </div>

        )
    }
}

CandidateCardContainer.proptypes = {
    vacantId: PropTypes.string,
    vacantName: PropTypes.string,
    vacantCode: PropTypes.string,
    candidates: PropTypes.array
};

const mapStateToProps = (state) => {
    return {
        newCandidate: state.globals.candidate || {}
    }
};

export default connect(mapStateToProps, null)(CandidateCardContainer);
