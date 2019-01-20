import React from 'react';
import Toast from "./Toast";
import {clearToast} from "../../gen/common/ActionFunctions";

export default class ToastContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: []
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.message && !this.props.message) {
            let messages = this.state.messages;
            messages.push(nextProps.message);
            this.setState({messages});
            setTimeout(() => {
                let messages = Object.assign([],this.state.messages);
                messages.shift();
                this.setState({messages});
            }, 7000);
            clearToast();
            return true;
        } else if (!nextProps.message && this.props.message) {
            clearToast();
            return true;
        }
        return nextState.messages.length !== this.state.messages.length;

    }

    render() {
        const messages = this.state.messages ? this.state.messages.map((message, index) => {
            return <Toast type={message.type} key={index} text={message.text}/>;
        }) : [];
        return (
            <div className="toastContainer">
                {messages}
            </div>
        );
    }
}

