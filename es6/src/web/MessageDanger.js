import React from 'react';

export default class MessageDanger extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="modal">
                <div className="modalContent danger">
                    <h2>{this.props.title}</h2>
                    <div className="message">{this.props.message}</div>
                    <button onClick={this.props.ok}>{this.props.okText}</button>
                </div>
            </div>
        );
    }
}

