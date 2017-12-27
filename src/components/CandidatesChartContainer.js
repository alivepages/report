import React from 'react';
import CandidatesChart from './CandidatesChart';

export default class CandidatesChartContainer extends React.Component {

  render() {
      return(
            <div className="row ml-2 mr-2">
              <div className="col-sm-12 mt-4">
                <div className="card boxshadow-xs candidatesCard">
                <h4 className="card-header">98%</h4>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-8">
                        <CandidatesChart/>
                        <div className="text-center ye-escala text-primary">
                          Escala de evaluación <i className="fa fa-info-circle" />
                        </div>
                        <div className="d-flex flex-row flex-wrap justify-content-center ye-escala">
                          <p className="mx-2 text-center">1- No demostrado <br/> <small>(0.50 - 1.69)</small> </p>
                          <p className="mx-2 text-center">2- En desarrollo <br/> <small>(0.50 - 1.69)</small></p>
                          <p className="mx-2 text-center">3- Competente <br/> <small>(0.50 - 1.69)</small> </p>
                          <p className="mx-2 text-center">4- Experto <br/> <small>(0.50 - 1.69)</small></p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="d-flex flex-row d-flex justify-content-start ye-fortalezas align-items-center mb-2">
                          <i className="fa fa-star text-warning my-3 pr-3 ye-fortalezas-icon" />
                          <div className="pr-5"><b>Fortalezas</b></div>
                        </div>
                        <div className="d-flex flex-row d-flex justify-content-start ye-fortalezas mb-2">
                          <h4><i className="fa fa-circle text-primary pr-3 ye-fortalezas-icon" /></h4>
                          <div className="pr-5"><small>COMPETENCIA NOMBRE <br/> <span className="text-primary">NIVEL EXPERTO</span></small></div>
                          <p><b>3.3</b></p>
                        </div>
                        <div className="d-flex flex-row d-flex justify-content-start ye-fortalezas">
                          <h4><i className="fa fa-circle text-primary pr-3 ye-fortalezas-icon" /></h4>
                          <div className="pr-5"><small>COMPETENCIA NOMBRE <br/> <span className="text-primary">NIVEL EXPERTO</span></small></div>
                          <p><b>3.3</b></p>
                        </div>

                          <div className="d-flex flex-row d-flex justify-content-start ye-fortalezas align-items-center mb-2 mt-3">
                            <i className="fa fa-arrow-circle-down ye-bad-icon my-3 pr-3 ye-fortalezas-icon" />
                            <div className="pr-5"><b>Areas de oportunidad</b></div>
                          </div>
                          <div className="d-flex flex-row d-flex justify-content-start ye-fortalezas mb-2">
                            <h4><i className="fa fa-circle text-primary pr-3 ye-fortalezas-icon" /></h4>
                            <div className="pr-5"><small>COMPETENCIA NOMBRE <br/> <span className="text-primary">NIVEL EXPERTO</span></small></div>
                            <p><b>3.3</b></p>
                          </div>
                          <div className="d-flex flex-row d-flex justify-content-start ye-fortalezas">
                            <h4><i className="fa fa-circle text-primary pr-3 ye-fortalezas-icon" /></h4>
                            <div className="pr-5"><small>COMPETENCIA NOMBRE <br/> <span className="text-primary">NIVEL EXPERTO</span></small></div>
                            <p><b>3.3</b></p>
                          </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
        )
    }
}
