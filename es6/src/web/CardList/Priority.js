import React from "react";

export default class Priority extends React.Component {

    constructor(props) {
        super(props);
        this.updateCardPriorityClick = this.updateCardPriorityClick.bind(this);
    }

    updateCardPriorityClick(priority) {
        if (this.props.editable) {
            this.props.updateFunction(this.props.cardId, priority, this.props.priority);
        }
    }
    
    render() {
        if (this.props.priority === 1) {
            return (
                <td className="priority noBreak">
                    <i className="fa fa-star" onClick={() => this.updateCardPriorityClick(1)}/>
                    <i className="far fa-star" onClick={() => this.updateCardPriorityClick(2)}/>
                    <i className="far fa-star" onClick={() => this.updateCardPriorityClick(3)}/>
                </td>
            );
        } else if (this.props.priority === 2) {
            return (
                <td className="priority noBreak">
                    <i className="fa fa-star" onClick={() => this.updateCardPriorityClick(1)}/>
                    <i className="fa fa-star" onClick={() => this.updateCardPriorityClick(2)}/>
                    <i className="far fa-star" onClick={() => this.updateCardPriorityClick(3)}/>
                </td>
            );
        } else if (this.props.priority === 3) {
            return (
                <td className="priority noBreak">
                    <i className="fa fa-star" onClick={() => this.updateCardPriorityClick(1)}/>
                    <i className="fa fa-star" onClick={() => this.updateCardPriorityClick(2)}/>
                    <i className="fa fa-star" onClick={() => this.updateCardPriorityClick(3)}/>
                </td>
            );
        } else {
            return (
                <td className="priority noBreak">
                    <i className="far fa-star" onClick={() => this.updateCardPriorityClick(1)}/>
                    <i className="far fa-star" onClick={() => this.updateCardPriorityClick(2)}/>
                    <i className="far fa-star" onClick={() => this.updateCardPriorityClick(3)}/>
                </td>
            );
        }
    }
}

