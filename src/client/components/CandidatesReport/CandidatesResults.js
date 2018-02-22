import React from 'react';
import CandidatesResultsItem from './CandidatesResultsItem';
import ReactTooltip from 'react-tooltip'

export default class CandidatesResults extends React.Component {
  render() {
      var CandidatesResultsMap = this.props.data.CompetencesAnalyzed.map((item, index) => {
        return (
          <CandidatesResultsItem item={item} key={index} candidateName={this.props.candidateName}/>
        )
      })
      let classTable = '';
      let classNoTable = '';
      if (this.props.table) {
        classTable = 'active';
      } else {
        classNoTable = 'active';
      }
      return(
            <div className="row m-0 ml-sm-2 mr-sm-2">
              <div className="col-sm-12 mt-4">
                <div className="card boxshadow-xs candidatesCard">
                <div className="card-header">
                  <div className="row">
                    <div className="col-sm-6">
                      <h5 className="">Resultados</h5>
                    </div>
                    <div className="col-sm-6 text-center text-sm-right">
                      <div className="btn-group mt-2" role="group">
                        <button type="button" className={'btn ye-result-switch ' + classNoTable} onClick={this.props.hideTable}>Interpretación</button>
                        <button type="button" className={'btn ye-result-switch ' + classTable} onClick={this.props.showTable}>Puntajes</button>
                      </div>
                    </div>
                  </div>
                </div>
                  {CandidatesResultsMap}
                </div>
              </div>
              <ReactTooltip />
            </div>
        )
    }
}
