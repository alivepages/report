import React from 'react';
import Table from './Table';

export default class CandidatesChartContainer extends React.Component {

  render() {
      let classTable = '';
      let classNoTable = '';
      if (this.props.table) {
        classTable = 'active';
      } else {
        classNoTable = 'active';
      }
      return(
            <div className="row ml-2 mr-2">
              <div className="col-sm-12 mt-4">
                <div className="card boxshadow-xs candidatesCard">

                <div className="card-header">
                  <div className="row">
                    <div className="col-sm-6">
                      <h5 className="">Resumen de resultados</h5>
                    </div>
                    <div className="col-sm-6 text-right">
                      <div className="btn-group mt-2" role="group">
                        <button type="button" className={'btn ye-result-switch ' + classNoTable} onClick={this.props.hideTable}>Interpretación</button>
                        <button type="button" className={'btn ye-result-switch ' + classTable} onClick={this.props.showTable}>Puntajes</button>
                      </div>
                    </div>
                  </div>
                </div>

                  <div className="card-body">
                    <div className="row mt-4">
                    <div className="col-sm-12">
                      <Table data={this.props.data}/>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}
