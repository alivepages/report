import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Sidebar extends React.Component {

    constructor() {
        super();
    }

    render() {

        const { menuOpened } = this.props;

        return(
            <div className={`ye-sidebar boxshadow-right ${menuOpened ? 'ye-menu-open' : ''}`}>
                <ul className="ye-sidebar-menu">
                    <li className="ye-sidebar-menu__item">
                        <a href="/editar_empresa">
                            <i className="ye-sidebar-menu__item-icon fa fa-building" />
                            <small className="ye-sidebar-menu__item-text"> Perfil de empresa</small>
                        </a>
                    </li>
                    <li className="ye-sidebar-menu__item">
                        <a href="/dashboard_vacantes">
                            <i className="ye-sidebar-menu__item-icon fa fa-suitcase" />
                            <small className="ye-sidebar-menu__item-text"> Panel de vacantes</small>
                        </a>
                    </li>   
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        menuOpened: state.globals.menuOpened
    }
};

export default connect(mapStateToProps, null)(Sidebar);

