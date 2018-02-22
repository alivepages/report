import React from 'react';
import PropTypes from 'prop-types';
import { 
    Dropdown, DropdownToggle, 
    DropdownMenu, DropdownItem 
} from 'reactstrap';
import { connect } from 'react-redux';

// Components
import Avatar from './Avatar';

class ListItems extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
			dropdownOpen: false,
			avatarUser: false,
			avatarUserUrl: ''
    };
	}
	
	componentWillMount() {
		this.setState(
			{
				avatarUser: this.props.avatarUser,
				avatarUserUrl: this.props.avatarUserUrl
			}
		)			
	}

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
	}

  render() {

		let { 
			avatarUserUrl, avatarUser, 
			avatarUserUrlState, avatarUserState
		} = this.props;
		
    return (
			<div>
				<Avatar 
					url={this.state.avatarUserUrl} 
					show={this.state.avatarUser}
					width="32"
					height="32"
				/>
				<small className="ml-2">{this.props.username}</small>
				<Dropdown className="d-inline-block" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
					<DropdownToggle
						tag="span"
						onClick={this.toggle}
						data-toggle="dropdown"
						aria-expanded={this.state.dropdownOpen}
						className="pl-2 pr-2"
						caret
					/>
					<DropdownMenu className="p-2" right>
						<div>
							<a className="ye-text-dark" href="/edit_profile">
								<i className="fa fa-cog"></i> Cuenta
							</a>
							<div></div>
							<a className="ye-text-dark" href="/faq" target="_blank">
								<i className="fa fa-book"></i> Documentación
							</a>
							<div className="dropdown-divider"></div>
							<a className="ye-text-dark" href="/logout">
								<i className="fa fa-sign-out"></i> Salir
							</a>
						</div>
					</DropdownMenu>
				</Dropdown>
			</div>
    );
  }
};

const mapStateToProps = (state) => {
	return {
		avatarUserUrlState: state.imageUpload.file !== null ? state.imageUpload[0].file.Url : '',
		avatarUserState: state.imageUpload.file !== null ? state.imageUpload[0].file.IsFind : false
	}
};

ListItems.proptypes = {
	avatarUserUrl: PropTypes.string,
	avatarUser: PropTypes.bool
}

export default connect(mapStateToProps, null)(ListItems);