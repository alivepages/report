import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, change } from 'redux-form';
import request from 'superagent';
import { setJobTypeId } from '../../redux/actions/Vacant';
import ProfileCompetencesLibrary from '../ProfileCompetencesLibrary';
import ProfileCompetencesCardList from '../ProfileCompentenceCardList';

// Actions
import { setCompetences } from '../../redux/actions/Globals';

class ProfileCompetences extends React.Component {


    render(){

        const {title, positionLevel, functionalArea, Competences } = this.props;

        return(
            <div>

    
                <ProfileCompetencesCardList
                    profiledCompetences={Competences}
                />
            </div>
        );

    }
}



export default ProfileCompetences;
