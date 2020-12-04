import React from "react";
import ScoreButton from "./ScoreButton";
import {scoreCard, sortCardOut} from "../../../gen/box/ActionFunctions";

export default class ScoreButtons extends React.Component {

    constructor(props) {
        super(props);
        this.scoreButton = this.scoreButton.bind(this);
    }

    scoreButton(quality) {
        return <ScoreButton
            key={quality}
            quality={quality}
            scoreButtonClick={() => scoreCard(quality)}
            texts={this.props.texts}
            disabled={!this.props.enableScoreButtons}
            language={this.props.language}
        />;
    }

    render() {
        return (
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
                    <button onClick={() => sortCardOut()}>{this.props.texts.queryCards.sortOut[this.props.language]}</button>
                </div>
            </div>
        );
    }
}

