import React from 'react';
import PropTypes from 'prop-types';
import request from 'superagent';
import { app_base_url } from '../../../utils/api/config';
import { connect } from 'react-redux';
import { setVisibilityModal } from '../../redux/actions/Modal';
import { isLoading } from '../../redux/actions/Globals';
import { loadCandidateDashboard } from '../../redux/actions/Candidate';

// Components
import CandidatesDashboardFilter from './CandidatesDashboardFilter';
import CandidatesDashboardBtnGroup from './CandidatesDashboardBtnGroup';
import ModalBtnContainer from '../containers/ModalBtnContainer';
import ModalContainer from '../containers/ModalContainer';
import ModalR from '../Modal/ModalRedux';
import CandidateInviteContainer from '../containers/CandidateInviteContainer';
import CandidateInterviewContainer from '../containers/CandidateInterviewContainer';
import CandidateHighlightContainer from '../containers/CandidateHighlightContainer';
import CandidateHireContainer from '../containers/CandidateHireContainer';
import VacantCloseContainer from '../containers/VacantCloseContainer';
import CandidateDeleteProcessContainer from '../containers/CandidateDeleteProcessContainer';
import CandidateReportShareContainer from '../containers/CandidateReportShareContainer';

import CandidateCardContainer from '../CandidateCard/CandidateCardContainer';


class CandidatesDashboardContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            vacantId: 0,
            vacantName: '',
            vacantCode: '',
            urlVacantEdit: '',
            urlVacantShare: '',
            actionsVacant:false,
            statusVacant: 0,
            btnActive: '',
            profiledCompetences:[]
        }

        this.getModalBody = this.getModalBody.bind(this);
        this.GetCandidates = this.GetCandidates.bind(this);        
        this.validatePreviousInvitation = this.validatePreviousInvitation.bind(this);
    }

    componentWillMount() {
        this.GetCandidates('');
    }

    componentDidMount(){
        
        this.setState({
            actionsVacant: this.props.vacant.VacantStatusType.Id == 1 ? false : true,
            statusVacant:  this.props.vacant.VacantStatusType
        });
    
    }

    componentWillReceiveProps(nextProps) {
      
        if(nextProps.newStatus != null && Object.keys(nextProps.newStatus).length !== 0) {
            this.setState({
                statusVacant: nextProps.newStatus
            });
        }
    }

    validatePreviousInvitation(candidate){
        var previousInvite = this.props.listCandidate.filter((el) => {
            if(candidate.Email == el.Candidate.Email) 
                return el;
        });

        if(previousInvite.length<1)
            return false;
        else
            return true;
    }

    GetCandidates(filterType){
        var dataParse = this.props.data;
        var vacantsId = [];

        this.setState({
            btnActive: filterType
        });


        // Add vacants id to array
        vacantsId.push(dataParse.iv);

        // Get all candidates of vacant
        var vacantCandidates = {
            "VacantId": vacantsId,
            "ProcessStateName": filterType !== '' ? [filterType] : []
        };

        this.props.loading(true);
       
        request
            .post(`/obtener_candidatos`)
            .send(vacantCandidates)
            .set('Content-Type', 'application/json')
            .end((err, res) => {

                if(err) {
                    console.log('Vuelve a intentarlo');
                    this.props.loading(false);
                    return;
                }
                
                if(res.status == 200) {
                    
                    var response = JSON.parse(res.body);
                    this.props.loadCandidate(response);
                    
                    this.props.loading(false);
                }
            });

        
            this.setState({
                vacantId: dataParse.iv,
                vacantName: dataParse.v,
                vacantCode: dataParse.c,
                urlVacantEdit: `/cargar_vacante?v=` + dataParse.iv,
                urlVacantShare: `${app_base_url}/vacante?k=`+dataParse.c
            });
        }

    getModalBody(type, candidateName) {       

        let bodyHeader = null;
        switch(type) {
            case 'Entrevistado':
                bodyHeader = <CandidateInterviewContainer 
                        formId='CandidateInterview' 
                        candidateName={candidateName}
                        vacantId={this.state.vacantId}
                    />
                break;
            case 'Destacado':
                bodyHeader = <CandidateHighlightContainer 
                        formId='CandidateHighlight'
                        candidateName={candidateName}
                        vacantId={this.state.vacantId}
                     />
                break;
            case 'Contratado':
                bodyHeader = <CandidateHireContainer 
                        formId='CandidateHire'
                        candidateName={candidateName}
                        vacantName={this.state.vacantName}
                        vacantId={this.state.vacantId}
                     />
                break;
            case 'CerrarVacante':           
                bodyHeader = <VacantCloseContainer 
                        formId='VacantClose'
                        vacantId={this.state.vacantId}
                        vacantName={this.state.vacantName}
                        urlKeyShare={this.state.urlVacantShare}
                    />
                break;
            case 'Compartir':
                bodyHeader = <CandidateReportShareContainer 
                        formId='CandidateReportyShare'
                        candidateName={candidateName}
                        vacantName={this.state.vacantName}
                        urlKeyShare={this.props.dataCandidate.urlKeyShare}
                     />
                break;
            case 'Rechazado':
                bodyHeader = <CandidateDeleteProcessContainer
                        formId='CandidateDeleteProcess'
                        candidateId={candidateName}
                        vacantId={this.state.vacantId}
                    />
                break;
        }
        
        return bodyHeader;
        
    }

    render() {
        
        return(
            <div className="row">
                <div className="col-sm-12">
                    <CandidatesDashboardFilter 
                        id={this.state.vacantId}
                        name={this.state.vacantName}
                        linkEdit={this.state.urlVacantEdit}
                        linkShare={this.state.urlVacantShare}
                        status={this.state.statusVacant}
                    >
                        <ModalContainer 
                            title='Invita a candidatos' 
                            showHeader={true} 
                            headerType="primary"
                            typeButton="button" 
                            styleType="primary-p"
                            textButton="Invitar candidato"
                            iconButton= "user-plus"
                            disabled={this.state.actionsVacant}
                        >
                            <CandidateInviteContainer 
                                formId='CandidateInvite'
                                vacantId={this.state.vacantId}
                                vacantName={this.state.vacantName}
                                vacantCode={this.state.vacantCode} 
                                validatePreviousInvitation={this.validatePreviousInvitation}
                            /> 
                        </ModalContainer>                        
                    </CandidatesDashboardFilter>
                    <CandidatesDashboardBtnGroup 
                        filter={this.GetCandidates}
                        active={this.state.btnActive}
                    />
                </div>
                <div className="col-sm-12 mt-4">
                    
                    <CandidateCardContainer
                        candidates={this.props.listCandidate}
                        vacantId={this.state.vacantId}
                        vacantName={this.state.vacantName}
                        vacantCode={this.state.vacantCode}
                        isFiltering={this.props.isLoading}
                        enterpriseProcessState={this.props.enterpriseProcessState}
                    />                
                </div> 

                <ModalR                    
                    showHeader={true}
                    title={this.props.dataCandidate.titleHeader}                   
                    type={this.props.dataCandidate.typeHeader}
                    isOpen={this.props.openModal.show}
                    toggle={this.props.onOpenModal}
                >
                    {this.getModalBody(this.props.dataCandidate.statusName, this.props.dataCandidate.candidateName)}
                </ModalR>              
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        openModal: state.modal,
        dataCandidate: state.modal.data || {},
        isLoading: state.globals.loading,
        listCandidate: state.loadCandidate.candidate,
        newStatus: state.jobType.status
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        onOpenModal: (show) => { 
            dispatch(setVisibilityModal(show))
        },
        loading: (loading) => {
            dispatch(isLoading(loading));
        },
        loadCandidate: (data) => {
            dispatch(loadCandidateDashboard(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CandidatesDashboardContainer);