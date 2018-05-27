import React from 'react';
import DeleteBoxClickAction from "../../box/actions/DeleteBoxClickAction";
import EditBoxAction from "../../box/actions/EditBoxAction";
import DaysBehindSchedule from "./DaysBehindSchedule";

export default class BoxItem extends React.Component {

    constructor(props) {
        super(props);
        this.onEdit = this.onEdit.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    onDeleteClick() {
        new DeleteBoxClickAction({boxId: this.props.boxId}).apply();
    }

    onEdit() {
        const data = {
            boxId: this.props.boxId,
            maxInterval: this.props.maxInterval ? this.props.maxInterval : "",
            maxIntervalChecked: !!(this.props.maxInterval && this.props.maxInterval > 0)
        };
        new EditBoxAction(data).apply();
    }

    render() {
        return (
            <div>

                <h1>{this.props.categoryName} - {this.props.totalCards} {this.props.texts.box.totalCards}</h1>

                {this.props.maxInterval > 1 &&
                <div>{this.props.texts.box.maxInterval.replace("{0}", this.props.maxInterval)}</div>}
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
                <button onClick={() => this.onDeleteClick(this.props.boxId)}>{"\u2717"}</button>
                <button onClick={() => this.onEdit(this.props.boxId)}>{"\u270E"}</button>

                <DaysBehindSchedule
                    boxId={this.props.boxId}
                    daysBehindSchedule={this.props.daysBehindSchedule}
                    texts={this.props.texts}
                    username={this.props.username}
                    password={this.props.password}
                />
            </div>
        );
    }
}

