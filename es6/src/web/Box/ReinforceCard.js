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
            reinforceCardId: this.props.data.reinforceCardId,
            boxId: this.props.data.boxId,
            quality,
            username: this.props.username,
            password: this.props.password
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
                    disabled={!this.props.data.enableScoreButtons}
                />
            );
        }
        return (
            <div>
                <h2>{this.props.texts.queryCards.reinforceCard}</h2>
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
                    {scoreButtons}
                </div>
                <button
                    onClick={() => new RouteAction({
                        username: this.props.username,
                        password: this.props.password,
                        hash: `#categories/${this.props.data.categoryId}`
                    }).apply()}>{this.props.texts.queryCards.category}
                </button>
                <button
                    onClick={() => new RouteAction({
                        username: this.props.username,
                        password: this.props.password,
                        hash: `#box/${this.props.data.boxId}`
                    }).apply()}>{this.props.texts.queryCards.back}
                </button>
            </div>
        );
    }
}

