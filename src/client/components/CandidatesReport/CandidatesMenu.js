import React from 'react';
import PropTypes from 'prop-types';

export default class CandidatesMenu extends React.Component {

  render() {
      let classProfile = '';
      let classAfinidad = '';
      if (this.props.profile) {
        classProfile = 'active';
      } else {
        classAfinidad = 'active';
      }
      return(
        <div className="row ml-2 mr-2">
          <div className="col-sm-12">
            <div className="yc-candidates-menu">
              <a className={classAfinidad} onClick={this.props.hideProfile}>AFINIDAD</a>
              <a className={classProfile} onClick={this.props.showProfile}>PERFIL CV</a>
            </div>
          </div>
        </div>
        )
    }
}
