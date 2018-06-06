import React from 'react';

export default class Given extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`given lastQuality_${this.props.lastQuality}`}>
                <div>
                    {this.props.given}
                </div>
                {this.props.scheduledDate &&
                <div>
                    {this.props.texts.queryCards.scheduledDate} {new Date(this.props.scheduledDate).toLocaleDateString()}
                </div>
                }
                <div>
                    {this.props.count === 0 && this.props.texts.queryCards.never}
                    {this.props.count > 0 &&
                    this.props.texts.queryCards.count.replace("{0}", this.props.count)}
                </div>
                {this.props.scoredDate &&
                <div>
                    {this.props.texts.queryCards.scoredDate} {new Date(this.props.scoredDate).toLocaleDateString()}
                </div>
                }
            </div>
        );
    }
}

