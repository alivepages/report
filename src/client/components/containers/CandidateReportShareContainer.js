import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { 
    WhatsappShareButton, WhatsappIcon,
    FacebookShareButton, FacebookIcon,
    TwitterShareButton, TwitterIcon
} from 'react-share';
import { reduxForm, isSubmitting } from 'redux-form';
import { isLoading, newCandidate } from '../../redux/actions/Globals'
import { setVisibilityModal } from '../../redux/actions/Modal'
import request from 'superagent'

// Forms components
import DinamicForm from '../forms/DinamicForm';
import CandidateReportShareForm from '../forms/CandidateReportShareForm';
import { fail } from 'assert';

class CandidateReportShareContainer extends React.Component {

    constructor() {
        super();

        this.state = {
            isSentCandidateReportEmail: false
        }

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(values) {
        this.props.loading(true);

        var sendMailData = {
            RecipientEmail: values.RecipientEmail,
            CandidateName: this.props.candidateName,
            EnterpriseName: "",
            VacantName: this.props.vacantName,
            UrlKeyShare: this.props.urlKeyShare
        }

        request
        .post('/enviar_reporte_candidato')
        .send(sendMailData)
        .set('application/json')
        .end((err, res) => {
            if(res.statusCode == 200){
                this.setState({ isSentCandidateReportEmail: true })
                this.props.loading(false);
            } else {
                this.setState({ isSentCandidateReportEmail: false })
                this.props.loading(false);
            }
        })

    }

    render() {
        return (

            <DinamicForm {...this.props} onSubmit={this.onSubmit}>
            {
                this.state.isSentCandidateReportEmail ?
                <div className='text-center'>
                    <i className="fa fa-check-circle text-success mb-3 display-3"></i>
                    <p className="pb-3">El correo ha sido enviado correctamente.</p>
                </div>
                :
                <div>
                    <CandidateReportShareForm />
                    <div className="form-group">
                        <button
                            type="submit"
                            disabled={this.props.submitting}
                            className="btn btn-primary btn-block"
                        >
                            Compartir
                            { this.props.submitting ? <i className="fa fa-spinner fa-pulse fa-lg fa-fw float-right"></i> : null }
                        </button>
                    </div>
                    <div className="text-center">
                        <span className="mt-4 mb-3 d-block">Compartir enlace público:</span>
                        <WhatsappShareButton 
                            className="d-inline-block mr-2"
                            url={this.props.urlShare}
                            title={`Reporte de ${this.props.candidateName}`}
                            separator=":: "
                        >
                            <WhatsappIcon size={32} round />
                        </WhatsappShareButton>
                        <FacebookShareButton
                            url={this.props.urlShare}
                            quote={`Reporte de ${this.props.candidateName}`}
                            className="d-inline-block mr-2">
                            <FacebookIcon
                                size={32}
                                round 
                            />
                        </FacebookShareButton>
                        <TwitterShareButton
                            url={this.props.urlShare}
                            title={`Reporte de ${this.props.candidateName}`}
                            className="d-inline-block"
                        >
                            <TwitterIcon
                                size={32}
                                round 
                            />
                        </TwitterShareButton>
                    </div>
                </div>
            }
            </DinamicForm>
        )

    }
}

// CandidateInviteContainer.proptypes = {
//     formId: PropTypes.string.isRequired
// }


const mapStateToProps = (state, ownProps) => {
    return {
        form: ownProps.formId,
        submitting: state.globals.loading,
        initialValues: {"UrlKeyShare": ownProps.urlKeyShare},
        urlShare: ownProps.urlKeyShare || ''
    }
}


const mapDispatchToProps = (dispatch) =>  {
    return {
        loading: (loading) => {
            dispatch(isLoading(loading));
        },
        addCandidate: (data) => {
            dispatch(newCandidate(data));
        },
        onOpenModal: (show) => {
            dispatch(setVisibilityModal(show))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CandidateReportShareContainer);
