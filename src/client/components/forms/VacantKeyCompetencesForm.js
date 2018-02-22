import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, isSubmitting } from 'redux-form';
import CompetenceCard  from '../CompetenceCard';
import ProfileLibrary from '../containers/ProfileLibrary';


// Components
import {
    RenderField,
    RenderSelectField
 } from './Fields/RenderField';
import { Required, password, } from './Validate/Validate';

let VacantKeyCompetencesForm = (props) => {
    return (
        <div>
            <div className="card boxshadow-xs">
                <div className="yc-profile-card__header text-center h3 p-3">
                    <h3>{ props.title }</h3>
                </div>
                <ProfileCompetencesLibrary 
                    title={props.title}
                    positionLevel={props.positionLevel}
                    functionalArea={props.functionalArea}
                />
            </div>       
        </div>
    )
};

export default VacantKeyCompetencesForm;
