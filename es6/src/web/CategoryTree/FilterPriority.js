import React from "react";
import {priorityChanged} from "../../../gen/category/ActionFunctions";

export default class FilterPriority extends React.Component {

    constructor(props) {
        super(props);
        this.updatePriorityClick = this.updatePriorityClick.bind(this);
    }

    updatePriorityClick(priority) {
        priorityChanged(priority)
    }

    render() {
        if (this.props.priority === 1) {
            return (
                <span className="priority noBreak">
                    <i className="fa fa-star" onClick={() => this.updatePriorityClick(1)}/>
                    <i className="far fa-star" onClick={() => this.updatePriorityClick(2)}/>
                    <i className="far fa-star" onClick={() => this.updatePriorityClick(3)}/>
                </span>
            );
        } else if (this.props.priority === 2) {
            return (
                <span className="priority noBreak">
                    <i className="fa fa-star" onClick={() => this.updatePriorityClick(1)}/>
                    <i className="fa fa-star" onClick={() => this.updatePriorityClick(2)}/>
                    <i className="far fa-star" onClick={() => this.updatePriorityClick(3)}/>
                </span>
            );
        } else if (this.props.priority === 3) {
            return (
                <span className="priority noBreak">
                    <i className="fa fa-star" onClick={() => this.updatePriorityClick(1)}/>
                    <i className="fa fa-star" onClick={() => this.updatePriorityClick(2)}/>
                    <i className="fa fa-star" onClick={() => this.updatePriorityClick(3)}/>
                </span>
            );
        } else {
            return (
                <span className="priority noBreak">
                    <i className="far fa-star" onClick={() => this.updatePriorityClick(1)}/>
                    <i className="far fa-star" onClick={() => this.updatePriorityClick(2)}/>
                    <i className="far fa-star" onClick={() => this.updatePriorityClick(3)}/>
                </span>
            );
        }
    }
}

