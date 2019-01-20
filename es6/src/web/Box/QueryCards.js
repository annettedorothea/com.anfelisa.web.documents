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
        if (this.props.cardId) {
            content = <Card {...this.props}/>
        } else if (this.props.reinforceCardId) {
            content = <ReinforceCard {...this.props}/>
        } else {
            content = <div className="buttons">
                <button
                    onClick={() => new ScheduleNextCardAction().apply()}
                    disabled={this.props.myCards === this.props.totalCards}
                >
                    {this.props.texts.queryCards.scheduleNextCard[this.props.language]}
                </button>
                <button
                    onClick={() => new RouteAction(`#box/reinforce/${this.props.boxId}`).apply()}
                    disabled={this.props.reinforceCards === 0}
                >
                    {this.props.texts.queryCards.reinforceCard[this.props.language]}
                </button>
            </div>;
        }
        return (
            <div className="box">
                <button
                    className="backButton"
                    onClick={() => new RouteAction("#dashboard").apply()}>{this.props.texts.queryCards.back[this.props.language]}
                </button>

                <h1>{this.props.categoryName}</h1>

                <DaysBehindSchedule
                    boxId={this.props.boxId}
                    daysBehindSchedule={this.props.daysBehindSchedule}
                    texts={this.props.texts}
                    language={this.props.language}
                />

                {content}

                <div className="infoAndStatistics">
                    <BoxInfo
                        {...this.props}
                        texts={this.props.texts}
                        language={this.props.language}
                    />

                    <Statistics {...this.props}/>

                </div>
            </div>
        );
    }
}

