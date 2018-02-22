import React from 'react';
import PropTypes from 'prop-types';
import ProfileCompetences from '../containers/ProfileCompetences';


let VacantSecondStep = (props) => {

    const {
        handleSubmit, previousPage, vacants,
        positionLevel, functionalArea, loading
    } = '';

    let competences = [
      {
        Competence: {
          Id:1
        }
      }
    ]

    return (
        <form onSubmit={handleSubmit}>
            <ProfileCompetences
                positionLevel={positionLevel}
                functionalArea={functionalArea}
                title="Competencias clave del puesto"
                Competences={competences}
            />
            <div className="row">
                <div className="col-sm-6 text-left">
                    <button
                        type="submit"
                        disabled={loading}
                        className="btn btn-outline-secondary"
                        onClick={previousPage}>
                        Anterior
                    </button>
                </div>

                <div className="col-sm-6 text-right">
                    <button
                        type="submit"
                        disabled={loading}
                        className="btn btn-primary-p"
                    >
                        Publicar
                        { loading ? <i className="fa fa-spinner fa-pulse fa-fw ml-1"></i> : null }
                    </button>
                </div>
            </div>
        </form>
    )
}


export default VacantSecondStep;
