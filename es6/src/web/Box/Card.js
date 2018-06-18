import React from "react";
import Given from "./Given";
import Wanted from "./Wanted";
import ScoreButton from "./ScoreButton";
import ScoreCardAction from "../../box/actions/ScoreCardAction";
import RouteAction from "../../common/actions/RouteAction";
import ToggleScheduleNextAction from "../../box/actions/ToggleScheduleNextAction";

export default class Card extends React.Component {

    constructor(props) {
        super(props);
        this.scoreButtonClick = this.scoreButtonClick.bind(this);
        this.onScheduleNextCheckedChange = this.onScheduleNextCheckedChange.bind(this);
    }

    scoreButtonClick(quality) {
        const data = {
            boxId: this.props.data.boxId,
            scheduledCardId: this.props.data.scheduledCardId,
            quality,
            username: this.props.username,
            password: this.props.password,
            scheduleNext: this.props.data.scheduleNext
        };
        new ScoreCardAction(data).apply();
    }

    onScheduleNextCheckedChange() {
        new ToggleScheduleNextAction().apply();
    }

    render() {
        const lines = this.props.data.wanted.split("\n");
        const scoreButtons = [];
        for (let i = 5; i >= 0; i--) {
            scoreButtons.push(
                <ScoreButton
                    key={i}
                    quality={i}
                    scoreButtonClick={this.scoreButtonClick}
                    texts={this.props.texts}
                    disabled={!this.props.data.enableScoreButtons}
                />
            );
        }
        return (
            <div>
                <Given
                    given={this.props.data.given}
                    lastQuality={this.props.data.lastQuality}
                    scheduledDate={this.props.data.scheduledDate}
                    scoredDate={this.props.data.scoredDate}
                    count={this.props.data.count}
                    texts={this.props.texts}
                />
                <Wanted
                    wanted={this.props.data.wanted}
                    lastQuality={this.props.data.lastQuality}
                    index={this.props.data.index}
                    image={this.props.data.image}
                    displayImage={this.props.data.displayImage}
                />
                <div>
                    <input id="scheduleNextCheckbox" type={"checkbox"} checked={this.props.data.scheduleNext}
                           onChange={this.onScheduleNextCheckedChange}/>
                    <label htmlFor="scheduleNextCheckbox">{this.props.texts.queryCards.scheduleNext}</label>
                </div>
                <div>
                    {scoreButtons}
                </div>
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

