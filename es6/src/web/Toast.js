import React from 'react';

export default class Toast extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`toastWrapper`}>
                <div className={`toast ${this.props.type}`}>{this.props.text}</div>
            </div>
        );
    }
}

