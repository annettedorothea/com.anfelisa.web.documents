import React from "react";

export default class ReinforceButton extends React.Component {

    render() {
        return (
            <button
                onClick={() => this.props.scoreButtonClick(this.props.keep)}
                disabled={this.props.disabled}
                className={`keep_${this.props.keep}`}
                >
                {this.props.texts.queryCards.reinforceButtons[this.props.keep][this.props.language]}
            </button>
        );
    }
}

