import React from 'react';
import PropTypes from 'prop-types';
import UrlCopy from '../UrlCopy';

let VacantPublish = (props) => {

    const { obj, dashboardCandidate } = props

    return(
        <div className="card boxshadow-xs p-5 text-center">
            <i className="fa fa-check-circle text-success mb-3 display-3"></i>
            <p className="h3 pb-3 text-success">Publicada correctamente</p>
            <p>Invita a tus candidatos o colaboradores a evaluarse para postularse a esta vacante.</p>
            <p className="mt-5"><strong>Link de tu vacante</strong></p>

            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <UrlCopy vacant={obj.UrlShare} />
                </div>
            </div>

            <div className="pt-5">
                <button
                    onClick={dashboardCandidate}
                    className="btn btn-primary-p"
                >
                    Invitar candidatos
                </button>
            </div>
        </div>
    );
}

export default VacantPublish;
