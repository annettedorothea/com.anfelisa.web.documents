import React from 'react';
import CancelEditBoxAction from "../../box/actions/CancelEditBoxAction";

export default class EditBoxItem extends React.Component {

    constructor(props) {
        super(props);
        this.onMaxIntervalChange = this.onMaxIntervalChange.bind(this);
        this.onMaxIntervalCheckedChange = this.onMaxIntervalCheckedChange.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.onCancel = this.onCancel.bind(this);
    }

    onMaxIntervalChange(event) {
        const maxInterval = event.target.value;
    }

    onMaxIntervalCheckedChange() {
        //new ToggleMaxIntervalAction().apply();
    }

    onUpdate() {
    }

    onCancel() {
        new CancelEditBoxAction().apply();
    }

    render() {
        console.log("EditBoxItem", this.props);
        console.log("this.props.editedBox.maxIntervalChecked", this.props.editedBox.maxIntervalChecked);
        return (
            <div>
                <h1>{this.props.categoryName} - {this.props.totalCards} {this.props.texts.box.totalCards}</h1>

                <input id="maxIntervalCheckbox" type={"checkbox"} value={this.props.editedBox.maxIntervalChecked} onChange={this.onMaxIntervalCheckedChange}/>
                <label htmlFor="maxIntervalCheckbox">{this.props.texts.editBox.maxInterval}</label>

                <input type="number" value={this.props.editedBox.maxInterval} onChange={this.onMaxIntervalChange} disabled={!this.props.editedBox.maxIntervalChecked}/>

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
                <button onClick={() => this.onUpdate(this.props.boxId)}>{"\u2713"}</button>
                <button onClick={() => this.onCancel(this.props.boxId)}>{"\u2717"}</button>
            </div>
        );
    }
}

