import React from 'react';

export default class Confirm extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>{this.props.title}</div>
                <div>{this.props.message}</div>
                <button onClick={this.props.ok}>{this.props.okText}</button>
                <button onClick={this.props.cancel}>{this.props.cancelText}</button>
            </div>
        );
    }
}

