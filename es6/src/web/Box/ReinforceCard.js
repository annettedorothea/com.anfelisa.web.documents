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
        this.scoreButton = this.scoreButton.bind(this);
    }

    scoreButtonClick(quality) {
        const data = {
            quality,
        };
        new ScoreReinforceCardAction(data).apply();
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
                <div className="categoryLink">
                    <a
                        onClick={() => new RouteAction({
                            hash: `#categories/${this.props.data.categoryId}`
                        }).apply()}
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
                </div>
            </div>
        );
    }
}

