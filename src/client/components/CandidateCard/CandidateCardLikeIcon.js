import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'reactstrap';

class CandidateCardLikeIcon extends React.Component {
    constructor() {
        super();

        this.state = {
            tooltipOpen: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        });
    }

    render() {

        const { 
            width, height, src, 
            candidateId, reaction, reactionId,
            position, onClick
        } = this.props; 

        return(
            <span 
                className="mr-2 ye-cursor-pointer" 
            >
                <img 
                    src={src} 
                    width={width} 
                    height={height} 
                    id={`tooltip-reaction-${candidateId}-${reactionId}`}
                    onClick={onClick}
                />
                <Tooltip 
                    placement={position} 
                    isOpen={this.state.tooltipOpen} 
                    target={`tooltip-reaction-${candidateId}-${reactionId}`} 
                    toggle={this.toggle}
                >
                    {reaction}
                </Tooltip>
            </span>
        )
    }
}

CandidateCardLikeIcon.defaultProps = {
    width:"32",
    height: "32",
    candidateId: 0,
    reactionId: 0,
    position: "top"
}

CandidateCardLikeIcon.prototypes = {
    src: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    reaction: PropTypes.string,
    candidateId: PropTypes.number,
    reactionId: PropTypes.number,
    position: PropTypes.string,
    onClick: PropTypes.func
};

export default CandidateCardLikeIcon;