import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { openMenu } from '../redux/actions/Globals';


class MenuIconBar extends React.Component {

    constructor() {
        super();

        this.handleOpenMenu = this.handleOpenMenu.bind(this);
    }

    handleOpenMenu() {

        let { openMenu, menuOpened } = this.props;
        
        openMenu(!menuOpened);
    }

    render() {

        const { menuOpened, openMenu } = this.props;

        let icon = menuOpened ? 'close' : 'bars';

        return (  
            
            <i 
                className={`fa fa-${icon} fa-lg ml-4 text-primary ye-cursor-pointer`}
                onClick={ () => { openMenu(!menuOpened) }}
            />
        
        );
    }
}

MenuIconBar.proptypes = {
    menuOpened: PropTypes.bool,
    openMenu: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        menuOpened: state.globals.menuOpened
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        openMenu: (open) => {
            dispatch(openMenu(open))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuIconBar);