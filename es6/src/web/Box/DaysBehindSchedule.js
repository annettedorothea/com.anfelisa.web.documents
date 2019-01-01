import React from 'react';
import PostponeCardsOfBoxAction from "../../box/actions/PostponeCardsOfBoxAction";

export default class DaysBehindSchedule extends React.Component {

    constructor(props) {
        super(props);
        this.onPostpone = this.onPostpone.bind(this);
    }

    onPostpone() {
        const data = {
            boxId: this.props.boxId
        };
        new PostponeCardsOfBoxAction(data).apply();
    }

    render() {
        if (!this.props.daysBehindSchedule || this.props.daysBehindSchedule <= 0) {
            return "";
        }
        return <div className="daysBehindSchedule">
            <div>
            {this.props.daysBehindSchedule === 1 ?
                this.props.texts.box.daysBehindScheduleMessageOne[this.props.language] :
                this.props.texts.box.daysBehindScheduleMessage[this.props.language].replace("{0}", this.props.daysBehindSchedule)}
            </div>
            <button className="primary" onClick={this.onPostpone}>{this.props.texts.box.postpone[this.props.language]}</button>
        </div>;
    }
}

