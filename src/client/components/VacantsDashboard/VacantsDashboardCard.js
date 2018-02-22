import React from 'react';
import PropTypes from 'prop-types';
import { app_base_url } from '../../../utils/api/config';
import request from 'superagent';
import moment from 'moment'

// Components
import VacantState from './VacantsDashboardCardState';
import ModalContainer from '../containers/ModalContainer';
import ProfileCompetenceCardList from '../ProfileCompentenceCardList';

class VacantsDashboardCard extends React.Component {

    constructor(){
        super()

        this.state = {
            profiledCompetences:[]
        };
        
       this.getVacantCompetencesProfile = this.getVacantCompetencesProfile.bind(this);
    }

    getVacantCompetencesProfile(vacantId ){
        request
        .get(`/obtener_competencias_vacante?vacantId=${vacantId}`)
        .end((err, res) => {

            if(err) {
                console.log('Vuelve a intentarlo');
                // this.props.isLoading(false);
                this.setState({profiledCompetences: [] });
                return;
            }
            
            if(res.status == 200) {
                
                this.setState({profiledCompetences: res.body });
                return;
            }
            this.setState({profiledCompetences: [] });

        });

          
    }

    render(){
    let {vacant, getVacantCompetencesProfile} = this.props;
    let urlVacantEdit = `/cargar_vacante?v=${vacant.Id}`;
    let urlDashboardCandidatos =  `/candidatos?v=${vacant.Name}&c=${vacant.VacantCode}&iv=${vacant.Id}`;

    return(
        <div className="card boxshadow-xs p-4 mb-4">
            <div className="row">
                <div className="col-md-8">
                    <a href={`${urlDashboardCandidatos}`} >
                        <h4 className="text-primary">
                            {vacant.Name}
                        </h4>
                    </a>
                    <span className="text-muted mb-1 d-block">
                        {`Puesto evaluado: ${vacant.JobTypeName}`}
                    </span>
                    <p className="text-muted">
                        <small><i className="fa fa-clock-o mr-1" />
                            {`Publicada ${moment(vacant.CreatedDate).format('DD/MM/YYYY') } `}
                                  &bull; 
                            {` ${vacant.HiringTypeName} `} 
                                  &bull; 
                            {` ${vacant.Ubication} `} 
                                 &bull; 
                            {` ${vacant.Departament} `} 
                        </small>
                    </p>
                    <p className="h3">
                        {`${vacant.TotalCandidates} Candidatos`}
                    </p>
                </div>
                <div className="col-md-4 text-left text-md-right">
                    <VacantState 
                        vacantId={vacant.Id}
                        statusTypeId={vacant.StatusTypeId}
                    />
                    <a href={`${urlVacantEdit}`}  className="text-muted">
                        <i className="fa fa-pencil mr-2" />
                        Editar
                    </a>
                    <p/>
                    <p/>
                    <div className="float-right pt-4">
                           <ModalContainer 
                                title='En esta vacante estas evaluando el siguiente perfil' 
                                showHeader={true}                     
                                typeButton="button" 
                                styleType="btn btn-primary"
                                headerType="primary"
                                textButton="Ver Competencias"
                                iconButton= "bar-chart"
                                onOpened={ ()=> this.getVacantCompetencesProfile(vacant.Id)}
                                size="lg"
                            >
                                <div className="p-3 ye-competence-modal">

                                        <ProfileCompetenceCardList
                                            profiledCompetences={this.state.profiledCompetences || []}
                                            viewProfiledCompetences={true}
                                        />

                                </div>                        
                            </ModalContainer>

                                
                        </div>
                </div>
            </div>
        </div>
    )
    }
}

VacantsDashboardCard.proptypes = {
    obj: PropTypes.object
};


export default VacantsDashboardCard;