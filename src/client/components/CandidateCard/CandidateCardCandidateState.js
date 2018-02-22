import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { 
    Dropdown, DropdownMenu, DropdownToggle, DropdownItem
} from 'reactstrap';
import { DropdownList } from 'react-widgets';
import { setVisibilityModal } from '../../redux/actions/Modal';
import { setCandidateStatus } from '../../redux/actions/Candidate';

let stateSelected = null;

class CandidateCardCandidateState extends React.Component {

    constructor() {
        super();      
        
        this.state = {
            dropdownOpen: false,
            candidatesStatesList: [],
            stateSelected: {
                icon: '',
                name: ''
            }
        };

        this.toggle = this.toggle.bind(this);
        this.getState = this.getState.bind(this);
    }

    componentWillMount(){
        let  {enterpriseProcessState}  = this.props;

        this.setState({
            candidatesStatesList: enterpriseProcessState,
            stateSelected: {
                icon: enterpriseProcessState[0].Icon,
                name: enterpriseProcessState[0].Name
            }
        });
    }

    componentDidMount() {
        
        var processDefault = this.state.candidatesStatesList.filter((el) => {
            if(this.props.process == el.Id) {
                return el;
            }
        });

        if(processDefault.length<1)
        {
            processDefault = this.state.candidatesStatesList.filter((el) => {
                if("Invitado" == el.Name) {
                    return el;
                }
            });
        }
    
        this.setState({
            stateSelected: {
                icon: processDefault[0].Icon,
                name: processDefault[0].Name
            }
        });
        
    }

    componentWillReceiveProps(nextProps) {
      
        if(nextProps.newStatus != null && Object.keys(nextProps.newStatus).length !== 0 && stateSelected != null) {

            var stateId = stateSelected.id;

            var stateIcon = nextProps.newStatus.icon;
            var stateName = nextProps.newStatus.name;
            var stateEl = document.getElementById(stateId);
            var stateElChild = stateEl.childNodes

            stateEl.classList.remove(stateSelected.icon);
            stateEl.classList.add(stateIcon);
            stateElChild[0].innerHTML = stateName;

            stateSelected = null;
        }
    }

    toggle() {

        stateSelected = this.stateObj;

        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    getState(item) {
        var id = this.props.candidateId;
        var candidateName = this.props.candidateName;
        let data = {}

        // Reset candidate status in redux
        this.props.changeCandidateStatus({});

        let headerObj = this.getTypeHeaderModal(item.Name);

        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });

        data = {
            candidateId: id,
            candidateName: candidateName,
            candidateEmail: this.props.candidateEmail,
            candidateStatus: {
                icon: item.Icon,
                name: item.Name
            },
            statusName: item.Name, 
            typeHeader: headerObj.header,
            titleHeader: headerObj.title               
        }

        this.props.onOpenModal({
            data,
            show: true
        });  
    
    }

    getTypeHeaderModal(type) {

        let typeHeader = {
            header: '',
            title: ''
        }

        switch(type) {
            case 'Entrevistado':
                typeHeader = {
                    header: 'primary',
                    title: 'Listo para una Entrevista'
                }
                break;
            case 'Destacado':
                typeHeader = {
                    header: 'info',
                    title: 'Genial has destacado a un candidato'
                }
                break;
            case 'Contratado':
                typeHeader = {
                    header: 'success',
                    title: '¡Felicidades por tu nueva contratación de Talento afin!'
                }
                break;
        }

        return typeHeader;
    }

    stateWithIcons({item}) {
        return(
            <small>
                <i className={`fa ${item.icon}`}></i>
                {" " + item.name}
            </small>
        )
    }

    render() {

        let { stateSelected } = this.state;
        let { candidateId } = this.props;

        let stateMenu = this.state.candidatesStatesList.map((item, index) => {

            return(
                <div {...(item.Name === 'Invitado') || (item.Name === 'Postulado') ? {disabled:"disabled"} : {}}
                    key={item.Id} 
                    className={`p-1 ${(item.Name === 'Invitado') || (item.Name === 'Postulado') || (item.Name === 'Descartado') ? 'ye-disabled' : ''}`}
                    onClick={() => {this.getState(item)}}                        
                >
                    <i className={`fa ${item.Icon}`}></i>
                    {" " + item.Name}
                </div>
            )
        });

        return(
            <Dropdown 
                isOpen={this.state.dropdownOpen} 
                toggle={this.toggle}
                className="ye-dropdown-candidate-states text-muted p-0"
            >
                <DropdownToggle 
                    caret
                    tag="small"
                    onClick={this.toggle}
                    data-toggle="dropdown"
                    aria-expanded={this.state.dropdownOpen}
                >
                    <i 
                        id={`candidate-card-${candidateId}`}
                        className={`fa ${stateSelected.icon}`}
                        ref={(obj) => { this.stateObj = obj }}
                    >
                        <span>{" " + stateSelected.name}</span>
                    </i>
                </DropdownToggle>
                <DropdownMenu className="p-2">
                    {stateMenu}
                </DropdownMenu>
            </Dropdown>
        )
    }
   
};

CandidateCardCandidateState.defaultProps = {
    process: 1,
    candidateId: 0,
    candidateName: ''
};

CandidateCardCandidateState.proptypes = {
    process: PropTypes.number,
    candidateId: PropTypes.number,
    candidateName: PropTypes.string,
    newStatus: PropTypes.object
};


const mapStateToProps = (state) => {
    return {
        modal: state.modal,
        newStatus: state.loadCandidate.status 
    }
};

const mapDispathToProps = (dispatch) => {
    return {
        onOpenModal: (show) => { 
            dispatch(setVisibilityModal(show))
        },
        changeCandidateStatus: (obj) => {
            dispatch(setCandidateStatus(obj))
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(CandidateCardCandidateState);