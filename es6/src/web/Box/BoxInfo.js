import React from 'react';
import EditBoxAction from "../../box/actions/EditBoxAction";
import MaxIntervalChangedAction from "../../box/actions/MaxIntervalChangedAction";
import CancelEditBoxAction from "../../box/actions/CancelEditBoxAction";
import UpdateBoxAction from "../../box/actions/UpdateBoxAction";

export default class BoxInfo extends React.Component {

    constructor(props) {
        super(props);
        this.onEditClick = this.onEditClick.bind(this);
        this.onMaxIntervalChange = this.onMaxIntervalChange.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.maxIntervalText = this.maxIntervalText.bind(this);
    }

    onEditClick() {
        new EditBoxAction(this.props.maxInterval === null ? "" : this.props.maxInterval).apply();
    }

    onMaxIntervalChange(e) {
        const maxInterval = e.target.value;
        new MaxIntervalChangedAction(maxInterval).apply();
    }

    onUpdate() {
        new UpdateBoxAction().apply();
    }

    onCancel() {
        new CancelEditBoxAction().apply();
    }

    maxIntervalText() {
        switch (this.props.maxInterval) {
            case null: {
                return this.props.texts.box.maxIntervalNull[this.props.language]
            }
            case 1: {
                return this.props.texts.box.maxIntervalOne[this.props.language]
            }
            default: {
                return this.props.texts.box.maxIntervalMore[this.props.language].replace("{0}", this.props.maxInterval);
            }
        }
    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                    <tr>
                        <td>{this.props.texts.box.todaysCards[this.props.language]}</td>
                        <td>{this.props.todaysCards}</td>
                    </tr>
                    <tr>
                        <td>{this.props.texts.box.reinforceCards[this.props.language]}</td>
                        <td>{this.props.reinforceCards}</td>
                    </tr>
                    <tr>
                        <td>{this.props.texts.box.myCards[this.props.language]}</td>
                        <td>{this.props.myCards}</td>
                    </tr>
                    <tr>
                        <td>{this.props.texts.box.totalCards[this.props.language]}</td>
                        <td>{this.props.totalCards}</td>
                    </tr>
                    {this.props.editMaxInterval === false &&
                    <tr>
                        <td>{this.props.texts.box.maxInterval[this.props.language]}</td>
                        <td className="noBreak">{this.maxIntervalText()}
                            <button onClick={this.onEditClick}><i className="fas fa-pen"/></button>
                        </td>
                    </tr>}
                    {this.props.editMaxInterval === true &&
                    <tr>
                        <td>{this.props.texts.box.maxInterval[this.props.language]}</td>
                        <td className="noBreak">
                            <input
                                type="number"
                                value={this.props.editedMaxInterval}
                                onChange={this.onMaxIntervalChange}
                            />
                            <button onClick={this.onUpdate}><i className="fas fa-check"/></button>
                            <button onClick={this.onCancel}><i className="fas fa-times"/></button>
                        </td>
                    </tr>}
                    {this.props.daysBehindSchedule !== undefined && this.props.daysBehindSchedule > 0 && <tr>
                        <td colSpan={2}>{this.props.daysBehindSchedule === 1 ?
                            this.props.texts.box.daysBehindScheduleMessageOne[this.props.language] :
                            this.props.texts.box.daysBehindScheduleMessage[this.props.language].replace("{0}", this.props.daysBehindSchedule)}</td>
                    </tr>}
                    </tbody>
                </table>

            </div>
        );
    }
}

