import React, { Component, ProptTypes } from 'react';

// Components
import CardsVacants from '../../components/CardVacants/CardVacantsContainer';

import { StorageService } from '../../utils/StorageService';
import { CandidateServices } from '../../HttpServices/CandidateServices';
import { VacantServices } from '../../HttpServices/VacantServices';
import { TestServices } from '../../HttpServices/TestServices';


class DashboardVacants extends Component{

  constructor(props) {
    super(props);
    this.endProcess = this.endProcess.bind(this);
    this.props = props;
  }

  async endProcess(){
    var vacantCode = StorageService.getItem('vacantCode');
    if (!vacantCode) {
      return;
    }
    var data = await VacantServices.getIdFromVacantCode(vacantCode);
    var user = StorageService.getItem('user');
    var candidateResponse = await CandidateServices.getProfileViewData(user.UserName);
    var candidateId = candidateResponse.Id;
    await VacantServices.changeStatus({
      CandidateId: candidateId,
      VacantId: data.VacantId,
      IdBasicStatus: 2,
      Name: "Postulado"
    });
    await TestServices.vacantUpdate(candidateId, vacantCode);
    StorageService.setItem('vacantCode', '');
  }

  async componentWillMount() {
    this.endProcess();
  }

  render() {

    return(
        <div>
            <div className="ye-full-app-body">
                <div className="container-fluid">
                    <div className="ye-padding-navbar-fixed">
                      <CardsVacants />
                    </div>
                </div>
            </div>
        </div>
    );
  }

}
export default DashboardVacants;
