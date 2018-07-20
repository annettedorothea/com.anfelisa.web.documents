import React from 'react';
import ScheduleNextCardAction from "../../box/actions/ScheduleNextCardAction";
import Card from "./Card";
import RouteAction from "../../common/actions/RouteAction";
import ReinforceCard from "./ReinforceCard";
import BoxInfo from "./BoxInfo";
import DaysBehindSchedule from "./DaysBehindSchedule";
import Statistics from "./Statistics";

export default class QueryCards extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let content;
        if (this.props.data.cardId) {
            content = <Card {...this.props}/>
        } else if (this.props.data.reinforceCardId) {
            content = <ReinforceCard {...this.props}/>
        } else {
            content = <div>
                <button onClick={() => new ScheduleNextCardAction(
                    {
                        username: this.props.username,
                        password: this.props.password,
                        boxId: this.props.data.boxId
                    }).apply()}>{this.props.texts.queryCards.scheduleNextCard[this.props.language]}</button>
                <button onClick={() => new RouteAction(
                    {
                        username: this.props.username,
                        password: this.props.password,
                        hash: `#box/reinforce/${this.props.data.boxId}`
                    }).apply()}>{this.props.texts.queryCards.reinforceCard[this.props.language]}</button>
                <button
                    onClick={() => new RouteAction({
                        username: this.props.username,
                        password: this.props.password,
                        hash: "#dashboard"
                    }).apply()}>{this.props.texts.queryCards.back[this.props.language]}
                </button>
            </div>;
        }
        return (
            <div>
                <h1>{this.props.data.categoryName}</h1>

                <BoxInfo
                    {...this.props.data}
                    username={this.props.username}
                    password={this.props.password}
                    texts={this.props.texts}
                    language={this.props.language}
                    loadList={false}
                />

                <DaysBehindSchedule
                    boxId={this.props.data.boxId}
                    daysBehindSchedule={this.props.data.daysBehindSchedule}
                    texts={this.props.texts}
                    language={this.props.language}
                    username={this.props.username}
                    password={this.props.password}
                    loadList={this.props.loadList}
                />

                <Statistics {...this.props.data}/>

                {content}
            </div>
        );
    }
}

