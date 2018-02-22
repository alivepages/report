import React from 'react';

class SideBarCompetences extends React.Component {

    render () {

        return (
          <nav className="ye-navbar-fixed-right ye-sidebar boxshadow-left">

              <div class="navbar-header boxshadow">
                <a class="navbar-brand" href="#">Catálogo de competencias</a>
              </div>
              <div className="container">
              <p className="p-3">Agrega las competencias clave para el puesto, es ideal seleccionar entre 8 a 12 Competencias
              como máximo, para una buena afinidad con el puesto que buscas.</p>
              <ul className="nav navbar-nav">

                <li>Nombre de competencia</li>
                <li>Nombre de competencia</li>
              </ul>
            </div>
          </nav>
        )
    }
}



export default SideBarCompetences;
