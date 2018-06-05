import React from 'react';
import ScheduleNextCardAction from "../../box/actions/ScheduleNextCardAction";
import Card from "./Card";

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
                    }).apply()}>SCHEDULE</button>

            </div>
        );
    }
}

