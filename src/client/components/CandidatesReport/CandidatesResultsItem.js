import React from 'react';
import Slider from './Slider';

export default class CandidatesResultsItem extends React.Component {
  render() {
    var item = this.props.item;
    var interpretation = item.InterpretationOfResults.split('|')
    return (
        <div>
          <div className="card-body">
              <div className="row">
                <div className="col-sm-4 mt-3 pl-4">
                    <div className="d-flex flex-row justify-content-start ye-fortalezas">
                      <h4>
                        <span className="fa-stack fa-lg mr-3  ye-fortalezas-icon">
                          <i className="fa fa-circle text-primary fa-stack-2x"></i>
                          <i className={item.CompetenceIcon + ' fa fa-stack-1x text-white'}></i>
                        </span>
                      </h4>
                      <div className="pr-5 mb-4 mb-sm-0">
                        <small className="ye-fortalezas-text">
                          <span className="d-block text-uppercase">{item.CompetenceName}</span> 
                          <span className="text-primary ye-fortalezas-nivel">NIVEL {item.CandidateDomainLevel.toUpperCase()}
                          </span>
                        </small>
                      </div>
                    </div>
                </div>
                <div className="col-sm-8">
                  <div className="row ml-2 mr-2 ml-sm-3 mr-sm-3">
                    <div className="col-6 col-sm-3 pl-0 d-flex flex-row justify-content-center">
                      <a href="#" data-tip="Rango de los evaluados" data-place="top">
                        <i className="ye-result-header4 fa fa-globe mr-2 mt-2" aria-hidden="true"/>
                      </a>
                      <span className="hidden-md-down ye-result-header4">Rango de los evaluados <br/> en el Mercado Laboral</span>
                      <strong className="mt-2 ml-2 mb-3 mb-sm-0 text-nowrap">{item.CandidatesAverageScoreMinimum} - {item.CandidatesAverageScoreMaximum}</strong>
                    </div>

                    <div className="col-6 col-sm-3  pl-4 d-flex flex-row justify-content-center">
                      <a href="#" data-tip="Puesto" data-place="top">
                        <i className="ye-result-header2 fa fa-briefcase mr-2 mt-2" aria-hidden="true"/>
                      </a>
                      <span className="hidden-md-down ye-result-header2 mt-2">Puesto</span>
                      <strong className="mt-1 ml-2 mb-3 mb-sm-0">{item.VacantScoreRequired}</strong>
                    </div>

                    <div className="col-6 col-sm-3 d-flex flex-row justify-content-center">
                      <a href="#" data-tip="Persona" data-place="top">
                        <i className="ye-result-header1 fa fa-user mr-2 mt-2" aria-hidden="true"/>
                      </a>
                      <span className="hidden-md-down ye-result-header1 mt-2">Persona</span>
                      <strong className="mt-1 ml-2 mb-3 mb-sm-0">{item.CandidateScore}</strong>
                    </div>

                    <div className="col-6 col-sm-3 d-flex flex-row text-center justify-content-center">
                      <a href="#" data-tip="Gap diferencia" data-place="top">
                        <i className="ye-result-header3 fa fa-graduation-cap mr-2 mt-2" aria-hidden="true"/>
                      </a>
                      <span className="hidden-md-down ye-result-header3">Gap <br/> diferencia</span>
                      <strong className="mt-2 ml-2 mb-3 mb-sm-0">{item.CandidateVacantGap}</strong>
                    </div>

                  </div>
                  <div className="row mb-5 mb-sm-0 ml-2 mr-2 ml-sm-3 mr-sm-3">
                    <div className="col-sm-12">
                      <Slider item={item}/>
                    </div>
                  </div>

                </div>
              </div>
          </div>
          <div className="card-body">
            <div className="row mt-4 ml-2 ye-result-text">
              <div className="col-sm-12">
                <p className="ye-result-title1 mb-1">{this.props.candidateName + ' ' + interpretation[0]}</p>
                <ul className="pl-3">
                  <li>{interpretation[1]}</li>
                  <li>{interpretation[2]}</li>
                  <li>{interpretation[3]}</li>
                </ul>
                <p className="ye-result-title2 mb-1">Sugerencia de desarrollo para {this.props.candidateName}</p>
                <ul className="pl-3">
                  <li>{interpretation[4]}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
