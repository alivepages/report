import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { 
    Modal, ModalHeader, 
    ModalBody, ModalFooter
} from 'reactstrap';

let ModalEnterprise = (props) => {

    let headerClass = classnames({
        [`modal-${props.headerType}`]: true 
    })

    return(
        <Modal 
            isOpen={props.isOpen} 
            className={`${headerClass}`} 
            onOpened={props.onOpened}
            {...props} 
        >

            { props.showHeader ? 

            <ModalHeader toggle={() => props.onToggle(false)}>
                { props.title }
            </ModalHeader>
            
            : null }

            <ModalBody>
                { props.children }
            </ModalBody>
        </Modal>
    )
}

ModalEnterprise.proptypes = {
    isOpen: PropTypes.bool,
    title: PropTypes.string,
    onToggle: PropTypes.func,
    children: PropTypes.node,
    showHeader: PropTypes.bool,
    showFooter: PropTypes.bool,
    headerType: PropTypes.string,
    modalClassname: PropTypes.string,
    onOpened: PropTypes.func
}

ModalEnterprise.defaultProps = {
    headerType: ''
}

export default ModalEnterprise;
