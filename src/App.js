import React, { Component } from 'react';
import CandidatesReport from './components/CandidatesReport';

class App extends Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-lg fixed-top navbar-light boxshadow-xs ye-bg-white">
        <div className="navbar-brand mr-auto">
          <div className="ye-logo-wrapper text-center">
            <img className="d-inline-block" src="/images/simb-logo-w.svg" alt="Yooin empresas"/>
          </div>
        </div>
        <a className="btn btn-secondary" href="/"><small>Registro / Iniciar sesión</small></a>
      </nav>
      <div className="ye-sidebar boxshadow-right"></div>
      <div className="ye-full-app-body">
        <div className="container-fluid">
          <div className="ye-padding-navbar-fixed testDesign">
            <CandidatesReport/>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
