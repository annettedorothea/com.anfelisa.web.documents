import React from "react";
import Given from "./Given";
import Wanted from "./Wanted";

export default class Card extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const lines = this.props.data.wanted.split("\n");

        console.log("this.props", this.props);
        return (
            <div>
                <Given
                    given={this.props.data.given}
                    lastQuality={this.props.data.lastQuality}
                    scheduledDate={this.props.data.scheduledDate}
                />
                <Wanted
                    wanted={this.props.data.wanted}
                    lastQuality={this.props.data.lastQuality}
                    index={this.props.data.index}
                />
            </div>
        );
    }
}

