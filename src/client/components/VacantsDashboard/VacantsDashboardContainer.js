import React from 'react';
import PropTypes from 'prop-types';
import request from 'superagent';
import { app_base_url } from '../../../utils/api/config';
import { connect } from 'react-redux';
import { setVisibilityModal } from '../../redux/actions/Modal';
import { isLoading } from '../../redux/actions/Globals';
import { loadVacants } from '../../redux/actions/Vacant';

// Components
import CardsList from './VacantsDashboardCardsList';
import ModalR from '../Modal/ModalRedux';
import VacantActiveContainer from '../containers/VacantActiveContainer';
import VacantInactiveContainer from '../containers/VacantInactiveContainer';
import VacantCloseContainer from '../containers/VacantCloseContainer';
import EvaluationInfo from '../containers/EvaluationInfo';

class VacantsDashboardContainer extends React.Component {
    constructor() {
        super();

        this.createVacant = this.createVacant.bind(this);
        this.getModalBody = this.getModalBody.bind(this);
    }

    componentWillMount() {
        this.GetVacants();
    }

    getModalBody(vacant) {
        let bodyHeader = null;

        switch(vacant.statusVacant) {
            case 'Activa':
                bodyHeader = <VacantActiveContainer 
                        formId='VacantActive' 
                    />
                break;
            case 'Inactiva':
                bodyHeader = <VacantInactiveContainer 
                        formId='VacantInactive' 
                    />
                break;
            case 'Cerrada':
                bodyHeader = <VacantCloseContainer 
                        formId='VacantClose' 
                        vacantId={vacant.vacantId}
                    />
                break;
        }
        
        return bodyHeader;
        
    }

    createVacant() {
        window.location.href = encodeURI(`/crear_vacante`)
    }

    GetVacants() {

        this.props.isLoading(true);

        request
            .get('/obtener_vacantes')
            .end((err, res) => {

                if(err) {
                    console.log('Vuelve a intentarlo');
                    this.props.isLoading(false);
                    return;
                }
                
                if(res.status == 200) {
                    
                    var response = JSON.parse(res.body);
                    this.props.loadAllVacants(response);
                    
                    this.props.isLoading(false);
                }
            });

    }

    render() {
        return(
            <div className="row">
                <div className="col-sm-12">
                    <CardsList 
                        vacants={this.props.listVacants}
                        createVacant={this.createVacant}
                        isLoading={this.props.loadData}
                    />
                    <ModalR                    
                        showHeader={true}
                        title={this.props.dataVacant.titleHeader}                   
                        type={this.props.dataVacant.typeHeader}
                        isOpen={this.props.openModal.show}
                        toggle={this.props.onOpenModal}
                    >
                        {  this.getModalBody(this.props.dataVacant)}
                    </ModalR> 
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        openModal: state.modal,
        loadData: state.globals.loading,
        dataVacant: state.modal.data || {},
        listVacants: state.jobType.vacants
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        onOpenModal: (show) => { 
            dispatch(setVisibilityModal(show))
        },
        isLoading: (loading) => {
            dispatch(isLoading(loading));
        },
        loadAllVacants: (data) => {
            dispatch(loadVacants(data))
        }  
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VacantsDashboardContainer);