import React from 'react';

class SideBarCompetences extends React.Component {

    render () {

        return (
          <nav className="ye-navbar-fixed-right boxshadow-xs">
              <div className="navbar-header">
                <div className="d-flex flex-row align-items-center justify-content-between">
                  <a href="#"><i className="fa fa-check fa-2x"></i></a>
                  <div className="navbar-title d-flex flex-row" href="#">
                    <i className="fa fa-book fa-2x mr-3"></i>
                    <span className="mt-1">Catálogo de competencias</span>
                  </div>
                  <a href="#"><i className="fa fa-close fa-2x mr-2"></i></a>
                </div>
              </div>
              <div className="nav-container">
                <p className="navbar-note">Agrega las competencias clave para el puesto, es ideal seleccionar entre 8 a 12 competencias
                como máximo, para una buena afinidad con el puesto que buscas.</p>
                <ul className="nav navbar-nav">

                  <li className="navbar-item">
                    <div className="d-flex flex-row align-items-center justify-content-between">
                      <div className="d-flex flex-row align-items-center">
                        <div className="navbar-icon check"><a href="#"><i className="fa fa-check"></i></a></div>
                        <i className="fa fa-balance-scale fa-2x mr-3 competence-icon"></i>
                        <p className="navbar-title">Nombre de competencia</p>
                      </div>
                      <a href="#"><i className="fa fa-angle-up fa-2x mr-2"></i></a>
                    </div>
                    <div className="navbar-description">Capacidad para acoplarse a entornos diferentes...</div>
                  </li>

                  <li className="navbar-item d-flex flex-row align-items-center justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      <div className="navbar-icon"><a href="#"><i className="fa fa-plus"></i></a></div>
                      <i className="fa fa-balance-scale fa-2x mr-3 competence-icon"></i>
                      <p className="navbar-title">Nombre de competencia</p>
                    </div>
                    <a href="#"><i className="fa fa-angle-down fa-2x  mr-2"></i></a>
                  </li>

                  <li className="navbar-item d-flex flex-row align-items-center justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      <div className="navbar-icon check"><a href="#"><i className="fa fa-check"></i></a></div>
                      <i className="fa fa-balance-scale fa-2x mr-3 competence-icon"></i>
                      <p className="navbar-title">Nombre de competencia</p>
                    </div>
                    <a href="#"><i className="fa fa-angle-down fa-2x  mr-2"></i></a>
                  </li>

                  <li className="navbar-item d-flex flex-row align-items-center justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      <div className="navbar-icon"><a href="#"><i className="fa fa-plus"></i></a></div>
                      <i className="fa fa-balance-scale fa-2x mr-3 competence-icon"></i>
                      <p className="navbar-title">Nombre de competencia</p>
                    </div>
                    <a href="#"><i className="fa fa-angle-down fa-2x  mr-2"></i></a>
                  </li>

                  <li className="navbar-item d-flex flex-row align-items-center justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      <div className="navbar-icon"><a href="#"><i className="fa fa-plus"></i></a></div>
                      <i className="fa fa-balance-scale fa-2x mr-3 competence-icon"></i>
                      <p className="navbar-title">Nombre de competencia</p>
                    </div>
                    <a href="#"><i className="fa fa-angle-down fa-2x  mr-2"></i></a>
                  </li>

                  <li className="navbar-item d-flex flex-row align-items-center justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      <div className="navbar-icon"><a href="#"><i className="fa fa-plus"></i></a></div>
                      <i className="fa fa-balance-scale fa-2x mr-3 competence-icon"></i>
                      <p className="navbar-title">Nombre de competencia</p>
                    </div>
                    <a href="#"><i className="fa fa-angle-down fa-2x  mr-2"></i></a>
                  </li>

                </ul>
            </div>
          </nav>
        )
    }
}



export default SideBarCompetences;
