import React from 'react';
import PropTypes from 'prop-types';
import ProfileCompetenceCard from './ProfileCompetenceCard';
import TooltipInfo from './TooltipIconInfo';
import domainScale from '../../utils/data/domainScale'

class ProfileCompentenceCardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        cardShow: null
    };
    this.toggle = this.toggle.bind(this);
    this.evaluation = this.evaluation.bind(this);
  }
  evaluation(level) {
    var scale = domainScale.filter((item) => {
      return (level >= item.min && level <= item.max)
    });
    if(scale[0])
    return scale[0].eval;
  }
  toggle(index, e) {
    var newIndex = null;
    if (this.state.cardShow != index) {
      newIndex = index;
    }
    this.setState({
      cardShow: newIndex
    });
  }
  render(){
    const { profiledCompetences } = this.props;

    const cards = profiledCompetences.map( (profiledCompetence, index) =>{
            return(
                <ProfileCompetenceCard
                    index = {index}
                    key = {profiledCompetence.Competence.Id}
                    profiledCompetence = {profiledCompetence}
                    toggle = {this.toggle}
                    opened = {false}
                    evaluation = "2"
                />
            )
    });

    var textContent = "Competencias clave del puesto ";
    var tooltipText = "Los perfiles de éxito de Yooin® están diseñados con base en las competencias “top” que más se solicitan en el mercado laboral.";

    return(
        <div>

            <TooltipInfo
                textContent = {textContent}
                tooltipText = {tooltipText}
                position = {"bottom"}
            />

            <div className="row">
              {
                 (this.props.profiledCompetences.length <= 0 && this.props.viewProfiledCompetences)?
                 <div className="col-sm-12 text-center mb-5 mt-5 text-primary">
                     <i className="fa fa-spinner fa-pulse fa-5x"></i>
                 </div>
                 :
                  cards
              }
            </div>
        </div>

    )
  }

}

export  default ProfileCompentenceCardList;
