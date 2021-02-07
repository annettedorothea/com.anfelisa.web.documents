import React from "react";
import Given from "./Given";
import Wanted from "./Wanted";
import ScoreButton from "./ScoreButton";
import {route} from "../../../gen/common/ActionFunctions";
import {scoreCard, scoreReinforceCard} from "../../../gen/box/ActionFunctions";
import ScoreButtons from "./ScoreButtons";
import ReinforceButtons from "./ReinforceButtons";

export default class Card extends React.Component {

    constructor(props) {
        super(props);
        this.scoreButtonClick = this.scoreButtonClick.bind(this);
        this.scoreButton = this.scoreButton.bind(this);
    }

    scoreButtonClick(quality) {
        if (this.props.scheduledCardId) {
            scoreCard(quality);
        } else {
            scoreReinforceCard(quality);s
        }
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
        return (
            <div>
                <Given
                    given={this.props.given}
                    lastQuality={this.props.lastQuality}
                    scheduledDate={this.props.scheduledDate}
                    scoredDate={this.props.scoredDate}
                    count={this.props.count}
                    texts={this.props.texts}
                    language={this.props.language}
                />
                <Wanted
                    wanted={this.props.wanted}
                    lastQuality={this.props.lastQuality}
                    index={this.props.index}
                    image={this.props.image}
                    displayImage={this.props.displayImage}
                />

                {this.props.scheduledCardId && <ScoreButtons {...this.props}/>}
                {!this.props.scheduledCardId && <ReinforceButtons {...this.props}/>}

                <div className="categoryLink">
                    <a onClick={() => route(`#categories/${this.props.rootCategoryId}${this.props.categoryId !== this.props.rootCategoryId ? "/" + this.props.categoryId : ""}${this.props.reverse === true ? "/reverse" : ""}`)}
                    >{this.props.texts.queryCards.category[this.props.language]}</a>
                </div>
            </div>
        );
    }
}

