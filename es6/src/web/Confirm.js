import React from 'react';

export default class Confirm extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="modal">
                <div className="modalContent">
                    <h2>{this.props.title}</h2>
                    <div className="message">{this.props.message}</div>
                    <button onClick={this.props.ok}>{this.props.okText}</button>
                    <button onClick={this.props.cancel}>{this.props.cancelText}</button>
                </div>
            </div>
        );
    }
}

