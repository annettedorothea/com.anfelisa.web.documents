import React from "react";

export default class ScoreButton extends React.Component {

    render() {
        return (
            <button
                onClick={() => this.props.scoreButtonClick(this.props.quality)}
                disabled={this.props.disabled}
                className={`quality_${this.props.quality}`}
                >
                {this.props.texts.queryCards.scoreButtons[this.props.quality][this.props.language]}
            </button>
        );
    }
}

