import React from 'react';

export default class CandidatesMenu extends React.Component {

  render() {
      return(
        <div className="row ml-2 mr-2">
          <div className="col-sm-12">
            <div className="yc-candidates-menu">
              <a>AFINIDAD</a>
              <a className="active">PERFIL</a>
            </div>
          </div>
        </div>
        )
    }
}
