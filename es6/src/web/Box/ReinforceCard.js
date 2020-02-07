import React from "react";
import Given from "./Given";
import Wanted from "./Wanted";
import ScoreButton from "./ScoreButton";
import RouteAction from "../../common/actions/RouteAction";

export default class ReinforceCard extends React.Component {

    constructor(props) {
        super(props);
        this.scoreButtonClick = this.scoreButtonClick.bind(this);
        this.scoreButton = this.scoreButton.bind(this);
    }

    scoreButtonClick(quality) {
    }

    scoreButton(quality) {
        return <ScoreButton
            key={quality}
            quality={quality}
            scoreButtonClick={this.scoreButtonClick}
            texts={this.props.texts}
            disabled={!this.props.enableScoreButtons}
            language={this.props.language}
        />;
    }

    render() {
        const lines = this.props.wanted.split("\n");
        return (
            <div>
                <h2>{this.props.texts.queryCards.reinforceCard[this.props.language]}</h2>
                <Given
                    given={this.props.given}
                    lastQuality={this.props.lastQuality}
                    scheduledDate={this.props.scheduledDate}
                    scoredDate={this.props.scoredDate}
                    count={this.props.count}
                    language={this.props.language}
                    texts={this.props.texts}
                />
                <Wanted
                    wanted={this.props.wanted}
                    lastQuality={this.props.lastQuality}
                    index={this.props.index}
                    image={this.props.image}
                    displayImage={this.props.displayImage}
                />
                <div className="categoryLink">
                    <a
                        onClick={() => new RouteAction(`#categories/${this.props.categoryId}`).apply()}
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

