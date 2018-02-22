import React from 'react';
import PropTypes from 'prop-types';

//Components
import { LinkModalForm, ButtonModalForm } from '../components/forms/ButtonsTypeModalForm';

let ModalBtn = (props) => {

    const { typeButton } = props;
    let labelButton = null;

    switch(typeButton) {
        case 'link':
            labelButton = <LinkModalForm {...props} />;
            break;
        case 'button':
            labelButton = <ButtonModalForm {...props} />;
            break;
    }

    return (
        <div>
            {labelButton}
        </div>
    )
}

ModalBtn.proptypes = {
    typeButton: PropTypes.string
}

ModalBtn.defaultProps = {
    typeButton: 'button'
}

export default ModalBtn;