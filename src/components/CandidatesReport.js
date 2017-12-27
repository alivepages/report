import React from 'react';
import CandidatesReportPresentation from './CandidatesReportPresentation';
import CandidatesChartContainer from './CandidatesChartContainer';
import CandidatesTableContainer from './CandidatesTableContainer';
import CandidatesActions from './CandidatesActions';
import CandidatesMenu from './CandidatesMenu';
import CandidatesProfile from './CandidatesProfile';

class CandidatesReport extends React.Component {

    render() {
        return(
          <div>
            <div className="row ml-2 mr-2">
                <div className="col-lg-4">
                    <h2 className="text-primary">
                      <i className="ye-arrow fa fa-arrow-left mr-3" />
                      Front end React Sr
                    </h2>
                </div>
                <CandidatesActions/>
            </div>
            <CandidatesReportPresentation/>
            <CandidatesMenu/>
            <CandidatesProfile/>
            <CandidatesChartContainer/>
            <CandidatesTableContainer/>
          </div>
        )
    }
}

export default CandidatesReport;
