import React from 'react';

export default class CandidatesActions extends React.Component {

  render() {
      return(
        <div className="col-lg-8 text-right">
            <div className="btn-group ye-tools" role="group" aria-label="...">
              <button type="button" className="btn btn-default">
                <small className="ml-1 mr-1">
                  <i className="fa fa-thumbs-o-up mr-1" />
                  <span className="ye-cursor-pointer">
                      Me gusta
                  </span>
                </small>
              </button>

              <button type="button" className="btn btn-default">
                <small className="ml-1 mr-1">
                  <i className="fa fa-share-alt mr-1" />
                  <span className="ye-cursor-pointer">
                      Compartir
                  </span>
                </small>
              </button>

              <div className="btn-group">
                <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                  <small className="ml-1 mr-1">
                    <i className="fa fa-file-pdf-o mr-1" />
                    <span className="ye-cursor-pointer">
                        Descargar
                    </span>
                  </small>
                </button>
                <ul className="dropdown-menu" role="menu">
                  <li><a href="#"><i className="fa fa-file-text mr-2" /> Descargar CV</a></li>
                  <li><a href="#"><i className="fa fa-file-pdf-o mr-2" /> Reporte integral de afinidad</a></li>
                </ul>
              </div>

              <div className="btn-group">
                <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                  <small className="ml-1 mr-1">
                    <i className="fa fa-users mr-1" />
                    <span className="ye-cursor-pointer">
                        Postulados <span className="caret"></span>
                    </span>
                  </small>
                </button>
                <ul className="dropdown-menu" role="menu">
                  <li><a href="#">Entrevista</a></li>
                  <li><a href="#">Destacado</a></li>
                  <li><a href="#">Contratado</a></li>
                </ul>
              </div>

              <button type="button" className="btn btn-default">
                <small className="ml-2 mr-2">
                  <i className="fa fa-user-times mr-1 text-danger" />
                  <span className="ye-cursor-pointer text-danger">
                      Descartar
                  </span>
                </small>
              </button>
            </div>
        </div>
        )
    }
}
