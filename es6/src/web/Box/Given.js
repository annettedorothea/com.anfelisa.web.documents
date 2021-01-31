import React from 'react';

export default class Given extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let lines = [];
        if (this.props.given.length > 0) {
            lines = this.props.given.split("\n");
        }

        let lineItems = [];
        for (let i = 0; i < lines.length; i++) {
            lineItems.push(<div key={i}>{lines[i]} </div>);
        }
        return (
            <div className={`given lastQuality_${this.props.lastQuality}`}>
                <div className="given-word">
                    {lineItems}
                </div>
                {this.props.scheduledDate &&
                <div className="small-info">
                    {this.props.texts.queryCards.scheduledDate[this.props.language]} {new Date(this.props.scheduledDate).toLocaleDateString()}
                </div>
                }
                <div className="small-info">
                    {this.props.count === 0 && this.props.texts.queryCards.never[this.props.language]}
                    {this.props.count > 0 &&
                    this.props.texts.queryCards.count[this.props.language].replace("{0}", this.props.count)}
                </div>
                {this.props.scoredDate &&
                <div className="small-info">
                    {this.props.texts.queryCards.scoredDate[this.props.language]} {new Date(this.props.scoredDate).toLocaleDateString()}
                </div>
                }
            </div>
        );
    }
}

