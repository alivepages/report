import React from 'react';
import FortalezasOportunidadesItem from './FortalezasOportunidadesItem';

export default class FortalezasOportunidades extends React.Component {
  render() {
    var data = this.props.data.slice(0);

    // las 3 de menor gap
    var fortalezas = data.splice(0, 3).map((item, index) => {
      return <FortalezasOportunidadesItem item={item} key={index}/>
    })

    // las 3 de mayor gap
    var debilidades = data.reverse().splice(0, 3).map((item, index) => {
      return <FortalezasOportunidadesItem item={item} key={index}/>
    })

    return (
      <div className="col-md-12 col-lg-4">
        <div className="row">
          <div className="col-md-6 col-lg-12">
            <div className="d-flex flex-row justify-content-start ye-fortalezas align-items-center mb-2">
              <span className="fa-stack fa-lg mr-3 my-3 ye-fortalezas-icon ">
                <i className="fa fa-star text-warning fa-stack-2x"></i>
              </span>
              <div className="pr-5"><b>Fortalezas</b></div>
            </div>
            {fortalezas}
          </div>
          <div className="col-md-6 col-lg-12">
            <div className="d-flex flex-row justify-content-start ye-fortalezas align-items-center mb-0 mb-lg-2 mt-0 mt-lg-3">
              <span className="fa-stack fa-lg mr-3 my-3 ye-fortalezas-icon ">
                <i className="fa fa-arrow-circle-down ye-bad-icon fa-stack-2x"></i>
              </span>
              <div className="pr-5"><b>Areas de oportunidad</b></div>
            </div>
            {debilidades}
          </div>
        </div>
      </div>
    )
  }
}
