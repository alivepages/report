import React from 'react';
import PropTypes from 'prop-types'
import {
    Modal, ModalHeader,
    ModalBody, ModalFooter
} from 'reactstrap';
import classnames from 'classnames';

let ModalRedux = (props) => {

    let { isOpen, title, toggle, children,
        showFooter, showHeader, large, type,
        btnclose } = props;

    let headerClass = classnames({
        [`modal-${type}`]: true 
    })
    

    return (
        <Modal
            isOpen={isOpen}
            className={`${headerClass} ${ large ? 'modal-lg' : '' } ${ !btnclose ? 'modal-close-hidden' : ''}`}
        >

        { showHeader ? 

            <ModalHeader toggle={() => toggle({data: {}, show: false})}>
                { title }
            </ModalHeader>
            
            : null }

            <ModalBody>
                { children }
            </ModalBody>
        </Modal>
    )
} 

ModalRedux.defaultProps = {
    type: '',
    large: false,
    btnclose: true
};

ModalRedux.proptypes = {
    isOpen: PropTypes.bool,
    title: PropTypes.string,
    toggle: PropTypes.func,
    children: PropTypes.node,
    showHeader: PropTypes.bool,
    showFooter: PropTypes.bool,
    large: PropTypes.bool,
    type: PropTypes.string,
    btnclose: PropTypes.string
}

export default ModalRedux;