import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';

class Avatar extends React.Component {

    constructor(){
        super();

        this.state = {
            url: ''
        }
    }

    componentDidMount() {
        this.setState({
            url: this.props.url
        })
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.pictureState) {
        this.setState({
            url: nextProps.pictureState
        })
      }
    }

    render() {
        const {
            width, height, center, classes
        } = this.props;

        let divStyle = {
            width: width + 'px',
            height: height + 'px'
        };

        let avatarIconStyle = {
            lineHeight: height + 'px'
        };

        return(

            <div
                className={`ye-avatar-user-icon ${classnames({"mx-auto d-block": center, "d-inline-block": !center})}`}
                style={divStyle}
            >

                { this.state.url != null && this.state.url ?

                    <img src={this.state.url} className={classes || 'rounded'} />

                :
                    <img src="/images/user.svg" className={'ye-empty-avatar-user ' + (classes || 'rounded')} />
                }

            </div>
        )
    }
};

const mapStateToProps = (state) => {
	return {
		pictureState: state.imageUpload.file !== null ? state.imageUpload[0].file.Url : '',
	}
};

Avatar.proptypes = {
    url: PropTypes.string,
    show: PropTypes.bool,
    width: PropTypes.string,
    height: PropTypes.string,
    center: PropTypes.bool
};

export default connect(mapStateToProps, null)(Avatar);
