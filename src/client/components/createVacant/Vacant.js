import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { initialize, change, registerField } from 'redux-form';
import request from 'superagent';
import apiUrl from '../../../utils/api/config';

// Components
import Dots from '../Dots';
import VacantFirstStep from './VacantFirstStep';
import SideBarProfiler from '../Perfilamiento/SideBarProfiler'
import VacantSecondStep from './VacantSecondStep';
import VacantPublish from './VacantPublish';
import { RESET } from 'redux-form/lib/actionTypes';

// Redux Actions
import { isLoading } from '../../redux/actions/Globals';

class Vacant extends React.Component {

  constructor() {
          super();
          this.state = {
              page: 1,
              hiringType: [],
              experiences: [],
              educationLevels: [],
              currencyCatalog: [],
              benefitType: [],
              vacants: [],
              languageCatalog: [],
              positionLevel: [],
              functionalArea: [],
              vacantObj: [],
              jobTypeId: 0,
              expertList:[]
          }
        }

    render() {


        const {
            page, hiringType, experiences,
            educationLevels, currencyCatalog,
            benefitType, languageCatalog, positionLevel,
            functionalArea, vacantObj, expertList
        } = '';


        return(
            <div className="mb-5">
                <SideBarProfiler/>
                <Dots total={3} page={page} />
                <div>

                <VacantSecondStep
                    previousPage={this.previousPage}
                    vacants={this.state.vacants}
                    positionLevel={this.state.positionLevel}
                    functionalArea={this.state.functionalArea}
                    onSubmit={this.onSubmit}
                />

                </div>
            </div>
        )
    }
}



export default Vacant;
