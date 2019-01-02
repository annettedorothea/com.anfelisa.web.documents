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
        this.scoreButton = this.scoreButton.bind(this);
    }

    scoreButtonClick(quality) {
        new ScoreCardAction(quality).apply();
    }

    onScheduleNextCheckedChange() {
        new ToggleScheduleNextAction().apply();
    }

    scoreButton(quality) {
        return <ScoreButton
            key={quality}
            quality={quality}
            scoreButtonClick={this.scoreButtonClick}
            texts={this.props.texts}
            disabled={!this.props.data.enableScoreButtons}
            language={this.props.language}
        />;
    }

    render() {
        const lines = this.props.data.wanted.split("\n");
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
                <div className="scheduleNextCheckbox">
                    <input
                        id="scheduleNextCheckbox"
                        type={"checkbox"}
                        checked={this.props.data.scheduleNext}
                        value={this.props.data.scheduleNext}
                        onChange={this.onScheduleNextCheckedChange}
                        disabled={this.props.data.myCards === this.props.data.totalCards}
                    />
                    <label
                        htmlFor="scheduleNextCheckbox">{this.props.texts.queryCards.scheduleNext[this.props.language]}
                    </label>
                </div>
                <div className="categoryLink">
                    <a
                        onClick={() => new RouteAction(`#categories/${this.props.data.categoryId}`).apply()}
                    >{this.props.texts.queryCards.category[this.props.language]}</a>
                </div>
                <div className="scoreButtons">
                    <div>
                        {this.scoreButton(5)}
                        {this.scoreButton(2)}
                    </div>
                    <div>
                        {this.scoreButton(4)}
                        {this.scoreButton(1)}
                    </div>
                    <div>
                        {this.scoreButton(3)}
                        {this.scoreButton(0)}
                    </div>
                    <div>
                        <button className="reinforce"
                                onClick={() => new RouteAction(`#box/reinforce/${this.props.data.boxId}`).apply()}
                                disabled={this.props.data.reinforceCards === 0}
                        >
                            {this.props.texts.queryCards.reinforceCard[this.props.language]}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

