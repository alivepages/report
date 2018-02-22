import React from 'react';
import PropTypes from 'prop-types';

let Dots = (props) => {

    const { total, page } = props;

    let arrayDots = new Array(total);

    for(var i=0; i < total; i++) {
        arrayDots[i] = i + 1;
    }

    const dotsSelected = arrayDots.map((dot) => {
        return(
            <li key={dot}>
                <span className={dot <= page ? 'active' : ''}>{dot}</span>
            </li>
        )
    });
    
    return(
        <div className="dotstyle dotstyle-puff text-center pt-4 pb-3">
            <ul>
                {dotsSelected}
            </ul>
        </div>
    )
};

Dots.proptypes = {
    total: PropTypes.number,
    page: PropTypes.number 
};

export default Dots;