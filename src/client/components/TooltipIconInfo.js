import React from 'react';
import { Tooltip } from 'reactstrap';

export default class TooltipIconInfo extends React.Component {

    constructor() {
        super();

        this.toogle = this.toogle.bind(this);
        this.state = {
            tooltipOpen: false
        };
    }

    toogle() {
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        });
    }

    render() {

        const {
            tooltipText, position,
            textContent
        } = this.props

        const toolId = this.props.toolId || "tooltipInfo";
        const toolIcon = this.props.toolIcon || "fa fa-info-circle";
        const toolStyle = this.props.toolStyle || "h5 mb-3";

        return(
            <div>
                <p className={toolStyle}>{textContent}
                    <i id={toolId} className={toolIcon} aria-hidden="true"></i>
                </p>
                <Tooltip
                    placement={position}
                    isOpen={this.state.tooltipOpen}
                    target={toolId}
                    toggle={this.toogle}
                >
                    {tooltipText}
                </Tooltip>
            </div>
        );
    }
}
