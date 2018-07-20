import React from 'react';
import CancelEditBoxAction from "../../box/actions/CancelEditBoxAction";
import ToggleMaxIntervalOfBoxAction from "../../box/actions/ToggleMaxIntervalOfBoxAction";
import MaxIntervalChangedOfBoxAction from "../../box/actions/MaxIntervalChangedOfBoxAction";
import UpdateBoxAction from "../../box/actions/UpdateBoxAction";
import RouteAction from "../../common/actions/RouteAction";
import BoxInfo from "./BoxInfo";

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
        new MaxIntervalChangedOfBoxAction({maxInterval}).apply();
    }

    onMaxIntervalCheckedChange() {
        new ToggleMaxIntervalOfBoxAction().apply();
    }

    onUpdate() {
        const data = {
            username: this.props.username,
            password: this.props.password,
            maxInterval: this.props.editedBox.maxInterval,
            boxId: this.props.boxId
        };
        new UpdateBoxAction(data).apply();
    }

    onCancel() {
        new CancelEditBoxAction().apply();
    }

    render() {
        return (
            <span className="tile double">

                <h2>{this.props.categoryName}</h2>

                <div className="tileContent form">
                    <div className="line">
                        <input id="maxIntervalCheckbox" type={"checkbox"}
                               checked={this.props.editedBox.maxIntervalChecked === true}
                               onChange={this.onMaxIntervalCheckedChange}/>
                        <label
                            htmlFor="maxIntervalCheckbox">{this.props.texts.editBox.maxInterval[this.props.language]}</label>
                    </div>

                    <div className="line">
                        <input type="number" value={this.props.editedBox.maxInterval}
                               onChange={this.onMaxIntervalChange}
                               disabled={!this.props.editedBox.maxIntervalChecked}/>
                    </div>
                </div>

                <div className="buttons">
                    <i className="fas fa-check fa-lg primary" onClick={this.onUpdate}/>
                    <i className="fas fa-times fa-lg primary" onClick={this.onCancel}/>
                </div>
            </span>
        );

        /*return (
            <div>
                <h1>{this.props.categoryName} - {this.props.totalCards} {this.props.texts.box.totalCards[this.props.language]}</h1>

                <input id="maxIntervalCheckbox" type={"checkbox"} checked={this.props.editedBox.maxIntervalChecked === true} onChange={this.onMaxIntervalCheckedChange}/>
                <label htmlFor="maxIntervalCheckbox">{this.props.texts.editBox.maxInterval[this.props.language]}</label>

                <input type="number" value={this.props.editedBox.maxInterval} onChange={this.onMaxIntervalChange} disabled={!this.props.editedBox.maxIntervalChecked}/>

                <table>
                    <tbody>
                    <tr>
                        <td>{this.props.texts.box.todaysCards[this.props.language]}</td>
                        <td>{this.props.todaysCards}</td>
                    </tr>
                    <tr>
                        <td>{this.props.texts.box.myCards[this.props.language]}</td>
                        <td>{this.props.myCards}</td>
                    </tr>
                    </tbody>
                </table>
                <button onClick={() => this.onUpdate(this.props.boxId)}>{"\u2713"}</button>
                <button onClick={() => this.onCancel(this.props.boxId)}>{"\u2717"}</button>
            </div>
        );*/
    }
}

