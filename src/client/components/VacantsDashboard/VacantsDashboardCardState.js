import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { 
    Dropdown, DropdownMenu, DropdownToggle, DropdownItem
} from 'reactstrap';
import { setVisibilityModal } from '../../redux/actions/Modal';
import { setVacantStatus } from '../../redux/actions/Vacant';

let vancantStates = [
    {
        Id: 1,
        Name: 'Activa',
        Color: 'text-success'
    },
    {
        Id: 2,
        Name: 'Inactiva',
        Color: 'text-danger'
    },
    {
        Id: 3,
        Name: 'Cerrada',
        Color: 'text-muted'
    }
]

let statusSelected = null;


class VacantsDashboardCardState extends React.Component {
    constructor() {
        super();

        this.state = {
            dropdownOpen: false,
            vancantStates:[],
            stateSelected: {
                Id: vancantStates[0].Id,
                Name: vancantStates[0].Name,
                Color: vancantStates[0].Color
            }
        };

        this.toggle = this.toggle.bind(this);
        this.getState = this.getState.bind(this);
    }


    componentWillMount(){
        let { statusTypeId } = this.props;

        var processDefault = vancantStates.filter((el) => {
            if(statusTypeId == el.Id) {
                return el;
            }
        });

    
        this.setState({
            stateSelected: {
                Id: processDefault[0].Id,
                Color: processDefault[0].Color,
                Name: processDefault[0].Name
            }
        });
    }

    componentWillReceiveProps(nextProps) {
      
        if(nextProps.newStatus != null && Object.keys(nextProps.newStatus).length !== 0 && statusSelected != null) {

            console.log('dropdown selected ---------', statusSelected);
            var statusId = statusSelected.id;
            var statusColor = nextProps.newStatus.Color;
            var statusName = nextProps.newStatus.Name;
            var statusEl = document.getElementById(statusId);

            statusEl.className = statusColor;
            statusEl.innerHTML = statusName;

            statusSelected = null;
        }
    }

    toggle() {

        statusSelected = this.statusSpan;

        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
        });
    }

    getState(item) {

        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });

        // Reset status vacant with redux
        this.props.changeVacantStatus({});

        let headerObj = this.getTypeHeaderModal(item.Name);

        // el id de la vacante por el momento es temporal, debe ser cambiado al verdadero cuando se obtengan los datos completamente
        this.props.onOpenModal({
            data: {
                vacantId: this.props.vacantId,
                statusVacant: item.Name,
                statusVacantObj: {
                    Id: item.Id,
                    Name: item.Name,
                    Color: item.Color
                },
                typeHeader: headerObj.header,
                titleHeader: headerObj.title               
            },
            show: true
        });
        
    }

    getTypeHeaderModal(statusNameVacant) {

        let typeHeader = {
            header: '',
            title: ''
        }

        switch(statusNameVacant) {
            case 'Activa':
                typeHeader = {
                    header: 'success',
                    title: '¡Todo listo para activar tu vacante!'
                }
                break;
            case 'Inactiva':
                typeHeader = {
                    header: 'danger',
                    title: '¿Estás seguro de cambiar a inactiva tu vacante?'
                }
                break;
            case 'Cerrada':
                typeHeader = {
                    header: 'success',
                    title: '¿Todo listo para cerrar tu Vacante?'
                }
                break;
        }

        return typeHeader;
    }

    render() {

        let { stateSelected } = this.state;
        let { vacantId } = this.props;

        let stateMenu = vancantStates.map((item) => {

            return(
                <div
                    key={item.Id} 
                    className={`${item.Color}`}
                    onClick={() => {this.getState(item)}}                        
                >
                    &bull; {" " + item.Name}
                </div>
            )
        });

        return(
            <Dropdown 
                isOpen={this.state.dropdownOpen} 
                toggle={this.toggle}
                className="ye-dropdown-candidate-states d-inline-block mr-3 p-0"
            >
                <DropdownToggle 
                    caret
                    tag="div"
                    onClick={this.toggle}
                    data-toggle="dropdown"
                    aria-expanded={this.state.dropdownOpen}
                >
                    <span
                        id={`vacant-card-${vacantId}`}
                        className={`${stateSelected.Color}`}
                        ref={(obj) => { this.statusSpan = obj }}
                    >
                        &bull; {" " + stateSelected.Name}
                    </span>
                </DropdownToggle>
                <DropdownMenu className="p-2">
                    {stateMenu}
                </DropdownMenu>
            </Dropdown>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        newStatus: state.jobType.status 
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onOpenModal: (show) => { 
            dispatch(setVisibilityModal(show))
        },
        changeVacantStatus: (obj) => {
            dispatch(setVacantStatus(obj))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VacantsDashboardCardState);