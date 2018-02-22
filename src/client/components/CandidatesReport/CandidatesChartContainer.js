import React, {Component} from 'react';
import CandidatesChart from './CandidatesChart';
import FortalezasOportunidades from './FortalezasOportunidades';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setVisibilityModal } from '../../redux/actions/Modal';
import ModalR from '../Modal/ModalRedux';
import EvaluationInfo from '../containers/EvaluationInfo';

class CandidatesChartContainer extends Component {
  constructor() {
      super();
      this.showModalInfo = this.showModalInfo.bind(this);
  }
  showModalInfo() {
    this.props.onOpenModal({
        show: true
    });
  }
  render() {
      var data = this.props.data;
      return(
            <div className="row m-0 ml-sm-2 mr-sm-2">
              <div className="col-sm-12 mt-4">
                <div className="card boxshadow-xs candidatesCard">
                  <div className="card-header">
                    <div className="row">
                      <div className="col-md-8 d-sm-flex flex-row">
                        <h1 className="text-primary mr-4 mt-1">{data.VacantAfinity}%</h1>
                        <div>
                          {data.VacantAnalyzed.Name} <br/>
                          <span className="text-primary">Afinidad con el puesto</span>
                        </div>
                      </div>
                      <div className="col-md-4 d-flex flex-row justify-content-between">
                        <div className="mx-4 pt-3 hidden">Necesarias: {data.TotalScoreCompetencesNeededAfinity} %</div>
                        <div className="mx-4 pt-3 hidden">Deseables: {data.TotalScoreCompetencesDesirableAfinity} %</div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12 col-lg-8">
                        <CandidatesChart data={data} candidateName={this.props.candidateName}/>
                        <a className="text-center ye-escala text-primary mb-3"
                           onClick={this.showModalInfo}
                        >
                          <span className="h5">Escala de evaluación</span>
                          <i className="fa fa-info-circle ml-1"/>
                        </a>
                        <div className="d-sm-flex flex-row flex-wrap justify-content-center ye-escala">
                          <p className="mx-2 text-center">
                            <strong className="d-block">1- No demostrado</strong>
                            <small>(0.50 - 1.69)</small>
                          </p>
                          <p className="mx-2 text-center">
                            <strong className="d-block">2- En desarrollo</strong>
                            <small>(1.70 - 2.59)</small>
                          </p>
                          <p className="mx-2 text-center">
                            <strong className="d-block">3- Competente</strong>
                            <small>(2.60 - 3.49)</small>
                          </p>
                          <p className="mx-2 text-center">
                            <strong className="d-block">4- Experto</strong>
                            <small>(3.50 - 4.00)</small>
                          </p>
                        </div>
                      </div>
                      <FortalezasOportunidades data={data.CompetencesAnalyzed}/>
                    </div>

                  </div>
                </div>
              </div>


              <ModalR
                  showHeader={true}
                  title="Escala de Niveles de Dominio"
                  type="primary"
                  isOpen={this.props.openModal.show}
                  toggle={this.props.onOpenModal}
              >
                  <EvaluationInfo/>
              </ModalR>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        openModal: state.modal
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        onOpenModal: (show) => {
            dispatch(setVisibilityModal(show))
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(CandidatesChartContainer);
