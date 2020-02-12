import React from "react";
import {displayWanted} from "../../../gen/box/ActionFunctions";

export default class Wanted extends React.Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(lines) {
        const wantedItemsLength = lines.length;
        displayWanted(wantedItemsLength);
    }

    render() {
        let lines = [];
        if (this.props.wanted.length > 0) {
            lines = this.props.wanted.split("\n");
        }

        let lineItems = [];
        for (let i = 0; i < lines.length; i++) {
            lineItems.push(<div key={i} className={i < this.props.index ? "" : "hidden"}>{lines[i]} </div>);
        }

        return (
            <div className={`wanted lastQuality_${this.props.lastQuality}`} onClick={() => this.onClick(lines)}>
                <div className="wanted-word">
                    {lineItems}
                    {this.props.image && <img src={this.props.image}
                                              className={this.props.displayImage === true ? "image" : "hidden image"}/>}
                </div>
            </div>
        );
    }
}

