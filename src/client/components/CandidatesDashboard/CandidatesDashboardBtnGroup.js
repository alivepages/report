import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

let CandidatesDashboardBtnGroup = (props) => {
    return(
        <div className="btn-group mt-4">
            <button 
                key={0} 
                className={`btn ${ (props.active == '') ? "btn-primary" : "btn-secondary"}`}
                onClick={() => props.filter('')}
            >
                <i className="fa fa-user mr-2"></i>
                <span className="d-none d-lg-inline">Candidatos</span>
            </button>
            <button 
                key={1} 
                className={`btn ${ (props.active == 'Invitado') ? "btn-primary" : "btn-secondary"}`}
                onClick={() => props.filter('Invitado')}
            >
                <i className="fa fa-send mr-2"></i>
                <span className="d-none d-lg-inline">Invitados</span>
            </button>
            <button 
                key={2} 
                className={`btn ${ (props.active == 'Postulado') ? "btn-primary" : "btn-secondary"}`}
                onClick={() => props.filter('Postulado')}
            >
                <i className="fa fa-group mr-2"></i>
                <span className="d-none d-lg-inline">Postulados</span>
            </button>
            <button 
                key={3} 
                className={`btn ${ (props.active == 'Entrevistado') ? "btn-primary" : "btn-secondary"}`}
                onClick={() => props.filter('Entrevistado')}
            >
                <i className="fa fa-list-alt mr-2"></i>
                <span className="d-none d-lg-inline">Entrevistados</span>
            </button>
            <button 
                key={4} 
                className={`btn ${ (props.active == 'Destacado') ? "btn-primary" : "btn-secondary"}`}
                onClick={() => props.filter('Destacado')}
            >
                <i className="fa fa-trophy mr-2"></i>
                <span className="d-none d-lg-inline">Destacados</span>
            </button>
            <button 
                key={5} 
                className={`btn ${ (props.active == 'Contratado') ? "btn-primary" : "btn-secondary"}`}
                onClick={() => props.filter('Contratado')}
            >
                <i className="fa fa-handshake-o mr-2"></i>
                <span className="d-none d-lg-inline">Contratados</span>
            </button>
        </div>
    )
}

CandidatesDashboardBtnGroup.proptypes = {
    onClick: PropTypes.func
};

export default CandidatesDashboardBtnGroup;