import React from 'react';
import PropTypes from 'prop-types';
import { 
    WhatsappShareButton, WhatsappIcon,
    FacebookShareButton, FacebookIcon,
    TwitterShareButton, TwitterIcon,
    LinkedinShareButton, LinkedinIcon
} from 'react-share';

//components
import UrlCopy from '../UrlCopy';
import ModalContainer from '../containers/ModalContainer';
let CandidatesDashboardFilter = (props) => {

    let { name, shareLink, id, linkEdit, linkShare, status, children } = props;

    let styleStatus = '';

    let vacantStatusName = (status.VacantStatus != null) ? status.VacantStatus : status.Name;
    

    switch(status.Id) {
        case 1:
            styleStatus = 'success';
            break;
        case 2:
            styleStatus = 'warning';
            break;    
        case 3:
            styleStatus = 'danger';
            break;
        default:
            styleStatus = 'info';
            break;
    }

    return(
        <div>
            <div className="d-lg-inline-block">
                <p className="h3">
                    {name}
                    <span className={`badge badge-${styleStatus} ye-badge--size ml-1`}>{vacantStatusName}</span>
                </p>
                <a href={`${linkEdit}`} className="text-muted mr-3">
                    <i className="fa fa-pencil pr-1"></i>
                     editar
                </a>
                <div className="d-lg-inline-block">
                    <ModalContainer 
                        title='Comparte esta vacante' 
                        showHeader={true}                     
                        typeButton="link" 
                        styleType="text-muted"
                        textButton="compartir"
                        iconButton= "share-alt"
                    >
                        <div className="row">
                            <div className="col-sm-12">
                                <UrlCopy vacant={linkShare} />
                            </div>
                            <div className="col-sm-12">
                                <div className="text-center">
                                    <span className="mt-4 mb-3 d-block">Compartir enlace público:</span>
                                    <WhatsappShareButton 
                                        className="d-inline-block mr-2"
                                        url={linkShare}
                                        title={`Vacante ${name}`}
                                        separator=":: "
                                    >
                                        <WhatsappIcon size={32} round />
                                    </WhatsappShareButton>
                                    <FacebookShareButton
                                        url={linkShare}
                                        quote={`Vacante ${name}`}
                                        className="d-inline-block mr-2">
                                        <FacebookIcon
                                            size={32}
                                            round 
                                        />
                                    </FacebookShareButton>
                                    <TwitterShareButton
                                        url={linkShare}
                                        title={`Vacante ${name}`}
                                        className="d-inline-block mr-2"
                                    >
                                        <TwitterIcon
                                            size={32}
                                            round 
                                        />
                                    </TwitterShareButton>
                                    <LinkedinShareButton
                                        url={linkShare}
                                        title={`Vacante ${name}`}
                                        windowWidth={750}
                                        windowHeight={600}
                                        className="d-inline-block">
                                        <LinkedinIcon
                                            size={32}
                                            round 
                                        />
                                    </LinkedinShareButton>
                                </div>                 
                            </div>
                        </div>       
                    </ModalContainer>
                </div>
                            
            </div>
            <div className="float-lg-right mt-3 mt-sm-3 mt-lg-0">
                {children}
            </div>
        </div>
    )
};


CandidatesDashboardFilter.defaultProps = {
    name: '',
    shareLink: '',
    id: '',
    status: ''
};

CandidatesDashboardFilter.proptypes = {
    name: PropTypes.string,
    shareLink: PropTypes.string,
    id: PropTypes.string,
    status: PropTypes.string
}

export default CandidatesDashboardFilter;