import React, { Children } from 'react';
import PropTypes from 'prop-types';
// Presentational Component
import ModalEnterprise from '../ModalEnterprise';
import ModalBtn from '../ModalBtn';

class ModalContainer extends React.Component{
    constructor() {
        super();

        this.state = {
            modal: false,            
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        })
    }

    render(){
        return(
            <div>
                <ModalBtn 
                    typeButton = {this.props.typeButton}
                    styleType = {this.props.styleType}
                    textButton = {this.props.textButton}
                    onToggle = {this.toggle}
                    icon={this.props.iconButton}
                    disabled={this.props.disabled}
                   />
                <ModalEnterprise 
                    title = {this.props.title}
                    showHeader = {this.props.showHeader}
                    headerType = {this.props.headerType}
                    onToggle = {this.toggle}
                    isOpen = {this.state.modal}
                    size={this.props.size}
                    onOpened={this.props.onOpened}
                >
                    {React.cloneElement(this.props.children, {toggle: this.toggle})}
                </ ModalEnterprise>    
            </div>
        )
    }
}

ModalContainer.proptypes = {
    title: PropTypes.string,
    showHeader: PropTypes.bool,
    headerType: PropTypes.string,
    typeButton: PropTypes.string,
    styleType: PropTypes.string,
    textButton: PropTypes.string,
    iconButton: PropTypes.string
}

export default ModalContainer;
