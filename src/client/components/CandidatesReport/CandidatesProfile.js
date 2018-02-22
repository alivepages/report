import React from 'react';
import CandidatesExperiences from './CandidatesExperiences';
import CandidatesEducation from './CandidatesEducation';

export default class CandidatesProfile extends React.Component {
  putButtons(array, field = 'Name') {
    if (!Array.isArray(array) || array.length === 0) {
      return "Aún no completa su información";
    }
    return array.map((item,index) => {
      if (item) {
        return <button key={index} type="button" className="btn  boxshadow-xs ye-profile-label mr-5 mb-3">{item[field]}</button>
      }
    })
  }
  render() {
      var anonymous = this.props.anonymous;
      var candidate = this.props.candidate;
      candidate.PhoneNumber = candidate.User.PhoneNumber;
      return(
        <div>
          {!anonymous && (candidate.Email || candidate.PhoneNumber) ?
            <div className="row ml-2 mr-2">
              <div className="col-sm-12 mt-4">
                <div className="card boxshadow-xs candidatesCard">
                <h5 className="card-header">Detalles del contacto</h5>
                  <div className="card-body">
                  {candidate.Email ?
                    <p className="p-2">
                      <i className="fa fa-envelope yc-rotate-45 yc-profile-icon mr-4" />
                      <a href={'mailto:' + candidate.Email}>{candidate.Email}</a>
                    </p>
                    : '' }
                    {candidate.PhoneNumber ?
                    <p className="p-2">
                      <i className="fa fa-phone yc-profile-icon mr-4" />
                      {candidate.PhoneNumber}
                    </p>
                    : '' }
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
                    <b>Me interesa trabajar en Industrias como: </b><br/>
                    {this.putButtons(candidate.Industries)}
                    </p>
                    <p className="p-2">
                      <b>Me interesa trabajar en Áreas como: </b><br/>
                      {this.putButtons(candidate.FunctionalAreas)}
                    </p>
                    <p className="p-2">
                      <b>Me interesan Puestos o roles como: </b><br/>
                      {this.putButtons(candidate.Jobs)}
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
                      {this.putButtons(candidate.Abilities)}
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
                      <CandidatesExperiences data={candidate.Experiences}/>
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
                      <CandidatesEducation data={candidate.Education}/>
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
                      {this.putButtons(candidate.Languages)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )
    }
}
