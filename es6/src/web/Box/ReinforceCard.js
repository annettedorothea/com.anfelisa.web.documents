import React from "react";
import Given from "./Given";
import Wanted from "./Wanted";
import ScoreButton from "./ScoreButton";
import RouteAction from "../../common/actions/RouteAction";
import ScoreReinforceCardAction from "../../box/actions/ScoreReinforceCardAction";

export default class ReinforceCard extends React.Component {

    constructor(props) {
        super(props);
        this.scoreButtonClick = this.scoreButtonClick.bind(this);
    }

    scoreButtonClick(quality) {
        const data = {
            quality,
        };
        new ScoreReinforceCardAction(data).apply();
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
                    language={this.props.language}
                    disabled={!this.props.data.enableScoreButtons}
                />
            );
        }
        return (
            <div>
                <h2>{this.props.texts.queryCards.reinforceCard[this.props.language]}</h2>
                <Given
                    given={this.props.data.given}
                    lastQuality={this.props.data.lastQuality}
                    scheduledDate={this.props.data.scheduledDate}
                    scoredDate={this.props.data.scoredDate}
                    count={this.props.data.count}
                    language={this.props.language}
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
                    {scoreButtons}
                </div>
                <button
                    onClick={() => new RouteAction({
                        hash: `#categories/${this.props.data.categoryId}`
                    }).apply()}>{this.props.texts.queryCards.category[this.props.language]}
                </button>
                <button
                    onClick={() => new RouteAction({
                        hash: `#box/${this.props.data.boxId}`
                    }).apply()}>{this.props.texts.queryCards.back[this.props.language]}
                </button>
            </div>
        );
    }
}

