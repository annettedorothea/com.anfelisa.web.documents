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
            quality
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
                    language={this.props.language}
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
                    language={this.props.language}
                />
                <Wanted
                    wanted={this.props.data.wanted}
                    lastQuality={this.props.data.lastQuality}
                    index={this.props.data.index}
                    image={this.props.data.image}
                    displayImage={this.props.data.displayImage}
                />
                <div>
                    <input
                        id="scheduleNextCheckbox"
                        type={"checkbox"}
                        checked={this.props.data.scheduleNext}
                        value={this.props.data.scheduleNext}
                        onChange={this.onScheduleNextCheckedChange}
                    />
                    <label
                        htmlFor="scheduleNextCheckbox">{this.props.texts.queryCards.scheduleNext[this.props.language]}</label>
                </div>
                <div>
                    {scoreButtons}
                </div>
                <button
                    onClick={() => new RouteAction({
                        hash: `#categories/${this.props.data.categoryId}`
                    }).apply()}>{this.props.texts.queryCards.category[this.props.language]}
                </button>
                <button
                    onClick={() => new RouteAction({
                        hash: "#dashboard"
                    }).apply()}>{this.props.texts.queryCards.back[this.props.language]}
                </button>
            </div>
        );
    }
}

