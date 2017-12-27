import React from 'react';
import Table from './Table';

export default class CandidatesChartContainer extends React.Component {

  render() {
      return(
            <div className="row ml-2 mr-2">
              <div className="col-sm-12 mt-4">
                <div className="card boxshadow-xs candidatesCard">
                <h6 className="card-header">Resumen de resultados</h6>
                  <div className="card-body">
                    <div className="row">
                    <div className="col-sm-12 mt-4">
                    <Table/>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}
