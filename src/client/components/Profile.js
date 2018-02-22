import React from 'react';
import PropTypes from 'prop-types';

// Forms components
import ProfileContainer from './containers/ProfileContainer';

class Profile extends React.Component {
   
    render() {

        return(
            <div>
                <ProfileContainer formId='Profile' name={this.props.name} {...this.props} />
                <div className="">
                    <button className="btn btn-primary float-right">Guardar</button>
                </div>
            </div>
        )

    }
}

export default Profile;