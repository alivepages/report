import React from 'react';
import PropTypes from 'prop-types';

let LoaderSpinner = (props) => {

    return(
        <div className="yc-loading">
            <div className="yc-loading__loader">
                <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
            </div>
        </div>
    )
}

export default LoaderSpinner;
