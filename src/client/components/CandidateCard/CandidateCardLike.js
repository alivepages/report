import React from 'react';
import PropTypes from 'prop-types';
import { 
    Popover, PopoverHeader, PopoverBody 
} from 'reactstrap';
import request from 'superagent';

const likeIcons = [
    { 
        Id: 1, 
        Text: 'me gusta', 
        Emoticon: 'iconmegusta.svg'
    },
    { 
        Id: 2, 
        Text: 'me encanta', 
        Emoticon: 'iconmeencanta.svg'
    },
    { 
        Id: 3, 
        Text: 'tengo duda', 
        Emoticon: 'icontengoduda.svg'
    },
    { 
        Id: 4, 
        Text: 'no me gusta', 
        Emoticon: 'iconnomegusta.svg'
    }
];

/*
1.- me gusta
2.- me encanta
3.- tengo duda
4.- no me gusta
*/

// Components
import CandidateCardLikenIcon from './CandidateCardLikeIcon';

class CandidateCardLike extends React.Component {
    constructor() {
        super();

        this.state = {
            popoverOpen: false,
            iconSelected: []
        };

        this.togglePopover = this.togglePopover.bind(this);
        this.handleClickIcon = this.handleClickIcon.bind(this);
    }

    componentDidMount() {
        if(this.props.opinions.length > 0) {
            this.setState({
                iconSelected: this.props.opinions
            });
        }
    }

    togglePopover() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }

    handleClickIcon(e) {
        var reactionId = e.target.id.split('-');
        var reactionIdSelected = parseInt(reactionId[3]);
        var data = {};

        var reactionIconSelected = likeIcons.filter((el) => {
            if(el.Id == reactionIdSelected) {
                return el;
            }
        });

        data.VacantId = parseInt(this.props.vacantId);
        data.CandidateId = this.props.candidateId;
        data.OpinionId = reactionIconSelected[0].Id;

        this.setState({
            iconSelected: reactionIconSelected
        });

        request
            .post('/seleccionar_reaccion')
            .send(data)
            .set('application/json')
            .end((err, res) => {
                console.log(res.status);
            });

    }

    render() {

        const { position, candidateId, vacantId, opinions } = this.props;

        let likeIconsList = likeIcons.map((icon) => {
            return(
                <CandidateCardLikenIcon
                    key={icon.Id}
                    candidateId={candidateId}
                    reactionId={icon.Id}
                    reaction={icon.Text}
                    src={`/images/opinions/${icon.Emoticon}`}
                    onClick={this.handleClickIcon}
                />
            )
        });

        return(
            <small className="text-muted mr-3">

                { this.state.iconSelected.length == 0 ?

                    <i className="fa fa-thumbs-o-up mr-1" />

                : null }

                <span 
                    className="ye-cursor-pointer" 
                    id={`popover-like-${candidateId}`} 
                    onClick={this.togglePopover}
                >
                    { this.state.iconSelected.length > 0 ?

                        <img
                            src={`/images/opinions/${this.state.iconSelected[0].Emoticon}`}
                            width={28} 
                            height={28} 
                        />
                    
                        : 

                        <span>Me gusta</span>
                    }
                </span>
                <Popover 
                    placement={position}
                    isOpen={this.state.popoverOpen} 
                    target={`popover-like-${candidateId}`}
                    toggle={this.togglePopover}
                >
                    <PopoverBody>

                        {likeIconsList}

                    </PopoverBody>
                </Popover>
            </small>
        )
    }

}

CandidateCardLike.defaultProps = {
    position: 'top',
    opinions: []
}

CandidateCardLike.proptypes = {
    opinions: PropTypes.array,
    vacantId: PropTypes.number,
    position: PropTypes.string,
    candidateId: PropTypes.number
}

export default CandidateCardLike;