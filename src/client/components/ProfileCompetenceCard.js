import React from 'react';
const ProfileCompetenceCard = (props) => {

  const { Id, profiledCompetence, index, opened, evaluation } = props

  return(
    <div className="col-12 col-lg-4">
      <div className="card">
          <div className="card-block p-0 d-flex align-items-center clearfix">
            <i className={`fa fa-adjust bg-primary p-4 fa-2x mr-3 rounded-left float-left ye-width-competence`}></i>
            <div className="h7">
              <p className="mb-0"> Trabajo en equipo </p>
              <strong className="text-uppercase text-primary font-xs">Nivel: Medio</strong>
              <strong className="font-xs">     3 </strong>
            </div>
            <a className="ye-collapse-arrow" onClick={props.toggle.bind(this, index)}><i className={(opened ? 'fa-caret-up' : 'fa-caret-down') + ' fa float-right mr-1'}></i></a>
          </div>
          {opened ?
          <div>
            <div className="card-block text-center">
              <p>{profiledCompetence.Competence.Description}</p>
              <p className="text-primary font-weight-bold">{evaluation}</p>
            </div>
          </div>
          : null}
      </div>
    </div>
  )
}

export default ProfileCompetenceCard;
