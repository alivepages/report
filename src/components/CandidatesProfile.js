import React from 'react';

export default class CandidatesProfile extends React.Component {

  render() {
      return(
            <div className="row ml-2 mr-2">
              <div className="col-sm-12 mt-4">
                <div className="card boxshadow-xs candidatesCard">
                <p className="card-header"><b>Detalles del contacto</b></p>
                  <div className="card-body">
                    <p className="">
                      <i className="fa fa-envelope-o yc-rotate-45" />
                      correo@ejemplo.com
                    </p>
                    <p className="">+52 5530249334</p>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}
