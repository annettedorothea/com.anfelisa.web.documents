import React from "react";
import DisplayWantedAction from "../../box/actions/DisplayWantedAction";

export default class Wanted extends React.Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        const lines = this.props.wanted.split("\n");
        const wantedItemsLength = lines.length;
        const index = this.props.index;
        if (wantedItemsLength > index) {
            const data = {
                wantedItemsLength,
                index
            };
            new DisplayWantedAction(data).apply();

        }
    }

    render() {
        const lines = this.props.wanted.split("\n");

        let lineItems = [];
        for(let i=0; i<this.props.index; i++) {
            lineItems.push(<div key={i}>{lines[i]}</div>);
        }

        return (
            <div className="wanted" onClick={this.onClick}>
                {lineItems}
                <div>
                    lastQuality {this.props.lastQuality}
                </div>
            </div>
        );
    }
}

