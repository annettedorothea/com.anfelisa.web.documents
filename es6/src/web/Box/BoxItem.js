import React from 'react';
import ToggleMaxIntervalAction from "../../box/actions/ToggleMaxIntervalAction";
import MaxIntervalChangedAction from "../../box/actions/MaxIntervalChangedAction";

export default class BoxItem extends React.Component {

    constructor(props) {
        super(props);
        this.onMaxIntervalChange = this.onMaxIntervalChange.bind(this);
        this.onMaxIntervalCheckedChange = this.onMaxIntervalCheckedChange.bind(this);
    }

    onMaxIntervalChange(event) {
        const maxInterval = event.target.value;
    }

    onMaxIntervalCheckedChange() {
        //new ToggleMaxIntervalAction().apply();
    }


    render() {
        console.log("BoxItem", this.props);
        return (
            <div>
                <h1>{this.props.categoryName} - {this.props.totalCards} {this.props.texts.box.totalCards}</h1>

                {this.props.maxInterval > 1 && <div>{this.props.texts.box.maxInterval.replace("{0}", this.props.maxInterval)}</div>}
                {this.props.maxInterval === 1 && <div>{this.props.texts.box.maxIntervalOne}</div>}

                <table>
                    <tbody>
                    <tr>
                        <td>{this.props.texts.box.todaysCards}</td>
                        <td>{this.props.todaysCards}</td>
                    </tr>
                    <tr>
                        <td>{this.props.texts.box.myCards}</td>
                        <td>{this.props.myCards}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

