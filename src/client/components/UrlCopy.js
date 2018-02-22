import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import copy from 'copy-to-clipboard';

class  UrlCopy extends React.Component {

    constructor() {
        super();

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        copy(this.textInput.value);
    }

    render() {

        const { vacant, copy } = this.props;

        return(
            <div className="input-group">
                <input
                    type="text"
                    value={vacant}
                    ref={(input) => { this.textInput = input; }}
                    className="form-control"
                    id="inputCopy"
                    disabled
                />
                <span className="input-group-btn">
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={this.onClick}
                    >
                        <i className="fa fa-clone pr-2"></i>
                        copiar
                    </button>
                </span>
            </div>
        );
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        copy: (url) => {
            dispatch(url)
        }
    }
};

UrlCopy.proptypes = {
    vacant: PropTypes.string
};

export default UrlCopy;
