import React from 'react';

export default class Dashboard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.texts.dashboard.title}</h1>
            </div>
        );
    }
}

