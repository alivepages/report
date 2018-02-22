import React from 'react';
import PropTypes from 'prop-types';


let VerticalNavbar = (props) => {

    const items = props.verticalNavbar.map((item)=>{
        return(
            <li className="nav-item" key={item.id}>
                <a href={item.url} className="color-primary float-right yc-profile-card__Link">
                    { item.item }
                </a>
            </li>
        )
    });

    return(
        <ul className="card boxshadow-xs yc-profile-sidebar hidden-md-down nav">
            { items }
        </ul>
    )
}

export default VerticalNavbar;