import React from "react";
import Given from "./Given";
import Wanted from "./Wanted";
import ScoreButton from "./ScoreButton";
import ScoreCardAction from "../../box/actions/ScoreCardAction";

export default class Card extends React.Component {

    constructor(props) {
        super(props);
        this.scoreButtonClick = this.scoreButtonClick.bind(this);
    }

    scoreButtonClick(quality) {
        const data = {
            boxId: this.props.data.boxId,
            scheduledCardId: this.props.data.scheduledCardId,
            quality,
            username: this.props.username,
            password: this.props.password
        };
        new ScoreCardAction(data).apply();
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
                {scoreButtons}
            </div>
        );
    }
}

