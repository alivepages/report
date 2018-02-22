import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const LinkModalForm = (props) => {
    
    const { styleType, textButton, children, onToggle, icon } = props;
    return (
        <div className="text-center">
            <a href="#" onClick={() => {onToggle(true)}} className={`${styleType}`}>
                { icon ?
                    <i className={ `fa fa-${icon} pr-2` }></i>
                    : null
                }
                <small>{textButton}</small>
            </a>
        </div>
    )

};

LinkModalForm.proptypes = {
    textButton: PropTypes.string,
}

export const ButtonModalForm = (props) => {
    
    const { styleType, children, textButton, onToggle, icon, disabled, onClick } = props; 

    let btnClass = classnames ({
        btn: true,
        [`btn-${styleType}`]: true 
    });

    return (

        <div className="text-center">
            <button 
                disabled={disabled}
                className={btnClass}
                onClick={  () => {onToggle(true),onClick}}
            >
                { icon ?
                    <i className={ `fa fa-${icon} mr-2` }></i>
                    : null
                }
                {textButton}
            </button>
        </div>
    )

};

ButtonModalForm.proptypes = {
    textButton: PropTypes.string,
    styleType: PropTypes.string,    
}

ButtonModalForm.defaultProps = {
    textButton: '',
    styleType: 'primary'
}
