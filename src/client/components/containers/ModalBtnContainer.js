import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityModal } from '../../redux/actions/Modal';

import ModalBtn from '../ModalBtn';


const mapStateToProps = (state) => {

    return {

        isOpen: state.modal

    }

};

const mapDispatchToProps = (dispatch, ownProps) => {

    return {

        toggle: (show) => {
            dispatch(setVisibilityModal(show))
        }
    }
};

const ModalBtnContainer = connect(
    null,
    mapDispatchToProps
)(ModalBtn);

export default ModalBtnContainer;

