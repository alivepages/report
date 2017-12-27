import React from 'react';

export default class CandidatesProfile extends React.Component {

  render() {
      var anonymous = this.props.anonymous;
      return(
        <div>
          {!anonymous ?
            <div className="row ml-2 mr-2">
              <div className="col-sm-12 mt-4">
                <div className="card boxshadow-xs candidatesCard">
                <h5 className="card-header">Detalles del contacto</h5>
                  <div className="card-body">
                    <p className="p-2">
                      <i className="fa fa-envelope yc-rotate-45 yc-profile-icon mr-4" />
                      <a href="mailto:correo@ejemplo.com">correo@ejemplo.com</a>
                    </p>
                    <p className="p-2">
                      <i className="fa fa-phone yc-profile-icon mr-4" />
                      +52 5530249334
                    </p>
                  </div>
                </div>
              </div>
            </div>
            : <div/> }

            <div className="row ml-2 mr-2">
              <div className="col-sm-12 mt-4">
                <div className="card boxshadow-xs candidatesCard">
                <h5 className="card-header">Lo que busca en su siguiente empleo</h5>
                  <div className="card-body">
                    <p className="p-2">
                      <b>Me interesa trabajar en industrias como: </b><br/>
                      <button type="button" className="btn  boxshadow-xs ye-profile-label mr-5 ">Aeroespacial</button>
                      <button type="button" className="btn  boxshadow-xs ye-profile-label ">Telecomunicaciones</button>
                    </p>
                    <p className="p-2">
                      <b>Me interesa trabajar en Areas como: </b><br/>
                      <button type="button" className="btn  boxshadow-xs ye-profile-label ">Mercadotecnia</button>
                    </p>
                    <p className="p-2">
                      <b>Me interesan puestos o roles como: </b><br/>
                      <button type="button" className="btn  boxshadow-xs ye-profile-label ">Director creativo</button>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row ml-2 mr-2">
              <div className="col-sm-12 mt-4">
                <div className="card boxshadow-xs candidatesCard">
                <h5 className="card-header">Habilidades principales</h5>
                  <div className="card-body">
                    <p className="p-2">
                      Aín no completa su información
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row ml-2 mr-2">
              <div className="col-sm-12 mt-4">
                <div className="card boxshadow-xs candidatesCard">
                <h5 className="card-header">Experiencia laboral relevante</h5>
                  <div className="card-body">
                    <p className="p-2">
                      Aín no completa su información
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row ml-2 mr-2">
              <div className="col-sm-12 mt-4">
                <div className="card boxshadow-xs candidatesCard">
                <h5 className="card-header">Estudios o certificaciones</h5>
                  <div className="card-body">
                    <p className="p-2">
                      Aín no completa su información
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row ml-2 mr-2">
              <div className="col-sm-12 mt-4">
                <div className="card boxshadow-xs candidatesCard">
                <h5 className="card-header">Idiomas</h5>
                  <div className="card-body">
                    <p className="p-2">
                      Aín no completa su información
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row ml-2 mr-2">
              <div className="col-sm-12 mt-4">
                <div className="card boxshadow-xs candidatesCard">
                <h5 className="card-header">Habilidades principales</h5>
                  <div className="card-body">
                    <p className="p-2">
                      Aín no completa su información
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
