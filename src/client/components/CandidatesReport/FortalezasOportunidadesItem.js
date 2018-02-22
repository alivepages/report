import React from 'react';

export default class FortalezasOportunidadesItem extends React.Component {
  render() {
    var item = this.props.item;
    return (
      <div className="row ye-fortalezas mb-4 mb-sm-3">
        <div className="col-9 col-md-8">
          <div className="d-flex flex-row justify-content-start">
            <span className="fa-stack fa-lg mr-3  ye-fortalezas-icon mr-2">
              <i className="fa fa-circle text-primary fa-stack-2x"></i>
              <i className={item.CompetenceIcon + ' fa fa-stack-1x text-white ye-fortalezas-icon-base'}></i>
            </span>
            <small>
              <span className="d-block">{item.CompetenceName.toUpperCase()}</span>
              <span className="text-primary ye-fortalezas-nivel">NIVEL {item.CandidateDomainLevel.toUpperCase()}</span>
            </small>
          </div>
        </div>
        <div className="col-3 col-md-4 text-right">
          <p className="pr-0 pr-sm-2"><b>{item.CandidateScore}</b></p>
        </div>
      </div>
    );
  }
}
