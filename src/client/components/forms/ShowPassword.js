import React, { Component } from 'react';
import {
	Input
} from 'reactstrap';

class ShowPassword extends Component{
	render(){
		return(
			<div className="yc-showPasword">
				<Input
					type='checkbox'
					onChange={this.props.showPasswordFunc}
				/>
				<span>Mostrar contraseña</span>
			</div>
		);
	}
}

export default ShowPassword;
