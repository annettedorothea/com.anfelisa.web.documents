import React from 'react';
import ScheduleNextCardAction from "../../box/actions/ScheduleNextCardAction";
import Card from "./Card";
import RouteAction from "../../common/actions/RouteAction";

export default class QueryCards extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.data.cardId) {
            return <Card {...this.props}/>
        }
        return (
            <div>
                <button onClick={() => new ScheduleNextCardAction(
                    {
                        username: this.props.username,
                        password: this.props.password,
                        boxId: this.props.data.boxId
                    }).apply()}>{this.props.texts.queryCards.scheduleNextCard}</button>
                <button
                    onClick={() => new RouteAction({
                        username: this.props.username,
                        password: this.props.password,
                        hash: "#dashboard"
                    }).apply()}>{this.props.texts.queryCards.back}
                </button>

            </div>
        );
    }
}

