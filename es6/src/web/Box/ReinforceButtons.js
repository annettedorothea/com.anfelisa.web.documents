import React from "react";
import {scoreReinforceCard, sortCardOut} from "../../../gen/box/ActionFunctions";
import ReinforceButton from "./ReinforceButton";

export default class ReinforceButtons extends React.Component {

    constructor(props) {
        super(props);
        this.reinforceButton = this.reinforceButton.bind(this);
    }

    reinforceButton(keep) {
        return <ReinforceButton
            key={keep}
            keep={keep}
            scoreButtonClick={() => scoreReinforceCard(keep)}
            texts={this.props.texts}
            disabled={!this.props.enableScoreButtons}
            language={this.props.language}
        />;
    }

    render() {
        return (
            <div className="scoreButtons">
                <div>
                    {this.reinforceButton(false)}
                    {this.reinforceButton(true)}
                </div>
                <div>
                    <button onClick={() => sortCardOut()}>{this.props.texts.queryCards.sortOut[this.props.language]}</button>
                </div>
            </div>
        );
    }
}

