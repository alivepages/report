import React from 'react';
import Slider from './Slider';

class SideBarProfiler extends React.Component {
    render () {
        let data = {
          CandidateScore: 3.5,
          VacantScoreRequired: 2.8,
          CandidatesAverageScoreMinimum: 3,
          CandidatesAverageScoreMaximum: 4
        }
        return (
          <nav className="ye-navbar-fixed-right boxshadow-xs">
              <div className="navbar-header">
                <div className="d-flex flex-row align-items-center justify-content-between">
                  <a href="#"><i className="fa fa-check fa-2x"></i></a>
                  <div className="navbar-title d-flex flex-row" href="#">
                    <i className="fa fa-sliders fa-2x mr-3"></i>
                    <span className="mt-1">Perfilador de competencias</span>
                  </div>
                  <a href="#"><i className="fa fa-close fa-2x mr-2"></i></a>
                </div>
              </div>
              <div className="nav-container">
                <div className="m-4 d-flex flex-row align-items-center">
                  <i className="fa fa-balance-scale fa-3x mr-3 text-primary"></i>
                  <p className="navbar-title text-uppercase">Nombre de competencia</p>
                </div>
                <p className="m-4">Definición competencia consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p className="m-4"><b>Dominio necesitado:<span class="text-primary"> Demuestra las habilidades cuando el entorno es favorable</span></b></p>
                <div className="mx-4 d-flex flex-row align-items-center justify-content-between">
                  <h5 className="text-primary"><b>2.7</b></h5>
                  <div className="d-flex flex-row align-items-center">
                  <a href="#" data-tip="Rango de los evaluados" data-place="top">
                    <i className="ye-perfiling-globe fa fa-globe mr-2 mt-2" aria-hidden="true"/>
                  </a>
                  <span className="ye-perfiling-range mr-3">Rango de los evaluados <br/> en el Mercado Laboral</span>
                    <div>2.7 - 3.5</div>
                  </div>
                </div>
                <p className="mx-4 mt-0 ye-perfiling-slider"><Slider item={data}/></p>
              </div>
          </nav>
        )
    }
}



export default SideBarProfiler;
