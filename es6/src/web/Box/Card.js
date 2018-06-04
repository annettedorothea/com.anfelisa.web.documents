import React from 'react';
import ScheduleNextCardAction from "../../box/actions/ScheduleNextCardAction";

export default class Card extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const lines = this.props.data.wanted.split("\n");

        console.log("lines", lines);
        console.log("this.props", this.props);
        return (
            <div>
                <div>
                    {this.props.data.given}
                </div>
                <div>
                {this.props.data.wanted}
                </div>
                <div>
                lastQuality {this.props.data.lastQuality}
                </div>
                <div>
                {new Date(this.props.data.scheduledDate).toLocaleDateString()}
                </div>
            </div>
        );
    }
}

