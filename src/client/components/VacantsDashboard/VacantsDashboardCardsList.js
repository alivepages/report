import React from 'react';
import PropTypes from 'prop-types';

// Components
import Card from './VacantsDashboardCard';


class VacantsDashboardCardsList extends React.Component{
    constructor() {
        super();
    }
    
    render() {
        let { createVacant, getVacantCompetencesProfile } = this.props;
        let vacantsList = null;
        
        if (this.props.vacants.length > 0 ) {
            vacantsList = this.props.vacants.map((vacant) => {
                return (
                    <div key={`${vacant.Id}`} className="col-12">
                        <Card 
                            vacant={vacant}
                        />
                    </div>
                )
            })
        }

        return(
            <div>                
                <div className="row">
                    <div className="col-12">
                        <div className="float-right pb-3">
                            <button 
                                onClick={createVacant}               
                                className="btn btn-primary-p"
                            >
                              <i className="fa fa-plus mr-2" />
                                Crear Vacante
                            </button>
                        </div>
                    </div>  
                </div>

                { this.props.vacants.length > 0  ?
                    <div className="row">
                        <div className="col-12">
                            {vacantsList}
                        </div>
                    </div>
                :
                    this.props.isLoading ? 
                    <div className="col-sm-12 text-center mb-5 mt-5 text-primary">
                        <i className="fa fa-spinner fa-pulse fa-5x"></i>
                    </div>
                :
                    <div className="col-sm-12 text-center mb-5 mt-5 text-disabled">
                        <i className="fa fa-suitcase display-1" />
                        <p>Aún no cuentas con vacantes.</p>
                    </div>                
                }         

            </div> 
        )
    }

}

VacantsDashboardCardsList.proptypes = {
    list: PropTypes.array
};

export default VacantsDashboardCardsList;



