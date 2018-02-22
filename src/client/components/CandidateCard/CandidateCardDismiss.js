import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setVisibilityModal } from '../../redux/actions/Modal';

class CandidateCardDismiss extends React.Component {

    constructor() {
        super();

        this.getDismiss = this.getDismiss.bind(this);
    }

    getDismiss() {
        this.props.onOpenModal({
            data: {
                candidateId: this.props.candidateId,
                candidateName: this.props.candidateName,
                candidateEmail: this.props.candidateEmail,
                statusName: 'Rechazado',
                typeHeader: 'danger',
                titleHeader:'¿Estas seguro de descartar este talento?'
            },
            show: true
        })
    }

    render() {

        return (
            <div>
                <i onClick={this.getDismiss} className="fa fa-user-times ye-cursor-pointer text-muted"></i>
            </div>
        )
    }
}

CandidateCardDismiss.defaultProps = {
    candidateId: 0
}

CandidateCardDismiss.prototypes = {
    candidateId: PropTypes.number
}

const mapDispathToProps = (dispatch) => {
    return {
        onOpenModal: (show) => { 
            dispatch(setVisibilityModal(show))
        }
    }
}

export default connect(null, mapDispathToProps)(CandidateCardDismiss);