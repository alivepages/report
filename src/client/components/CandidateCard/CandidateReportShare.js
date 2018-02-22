import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import request from 'superagent';

//Components
import { setVisibilityModal } from '../../redux/actions/Modal';
class CandidateReportShare extends React.Component {
    constructor(){
        super();
        this.openModal = this.openModal.bind(this);
    }

    openModal(){
        var dataKeyShare = {
            VacantId: this.props.vacantId,
            candidateId: this.props.candidateId
        }

        request
        .post('/obtener_clave_compartida_candidato')
        .send(dataKeyShare)
        .set('application/json')
        .end((err, res) => {
            
            if(res.statusCode == 200){
                var response = JSON.parse(res.body);
                this.props.onOpenModal({
                    data: {
                        urlKeyShare: response.UrlShare,
                        statusName: 'Compartir',
                        candidateName: this.props.candidateName,
                        typeHeader: 'primary',
                        titleHeader: 'Compartir Reporte Integral de Afinidad'
                    },
                    show: true
                });
            } else {

            }
        })
    }

    render(){
        return(
            <small className="text-muted ye-cursor-pointer" onClick={this.openModal}>
                <i className="fa fa-share mr-1" />
                compartir
            </small>
        )
    }

};

const mapDispathToProps = (dispatch) => {
    return {
        onOpenModal: (show) => {
            dispatch(setVisibilityModal(show))
        }
    }
}

export default connect(null, mapDispathToProps)(CandidateReportShare);
