import React from 'react';

export default class Given extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="given">
                <div>
                    {this.props.given}
                </div>
                <div>
                    lastQuality {this.props.lastQuality}
                </div>
                <div>
                    {new Date(this.props.scheduledDate).toLocaleDateString()}
                </div>
            </div>
        );
    }
}

