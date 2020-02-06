import React from 'react';
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
        } else if (this.props.myCards === 0) {
            content = <div className="buttons">{this.props.texts.queryCards.empty[this.props.language]}</div>;
        }
        return (
            <div className="box">

                <h1>
                    <button
                        className="backButton"
                        onClick={() => new RouteAction("#dashboard").apply()}><i className="fa fa-arrow-left"/>
                    </button>
                    {this.props.categoryName}
                </h1>

                <DaysBehindSchedule
                    boxId={this.props.boxId}
                    daysBehindSchedule={this.props.daysBehindSchedule}
                    texts={this.props.texts}
                    language={this.props.language}
                />

                {this.props.todaysCards === 0 && !this.props.reinforceCardId &&
                <h2>
                    <i className="fa fa-check-circle"/>
                    {this.props.texts.queryCards.ahead[this.props.language]}
                </h2>}

                {this.props.todaysCards === 0 && !this.props.reinforceCardId && this.props.reinforceCards > 0 &&
                <button className="reinforceHeader"
                        onClick={() => new RouteAction(`#box/reinforce/${this.props.boxId}`).apply()}>
                    {this.props.texts.queryCards.reinforceCard[this.props.language]}
                </button>
                }

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

