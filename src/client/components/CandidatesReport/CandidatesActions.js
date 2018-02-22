import React from 'react';

export default class CandidatesActions extends React.Component {

  render() {
      if (!this.props.candidate.files[4]) {
        return <div/>
      }
      return(
        <div className="col-lg-6 text-right">
            <div className="btn-group ye-tools" role="group" aria-label="...">
              <a className="btn btn-default active" target="_blank" href={this.props.candidate.files[4]}>
                <small className="ml-1 mr-1">
                  <i className="fa fa-file-pdf-o mr-1" />
                  <span className="ye-cursor-pointer">
                      Descargar CV
                  </span>
                </small>
              </a>

            </div>
        </div>
        )
    }
}
