import React from 'react';
import Spinner from "./Spinner";
import AnonymousContainer from "./AnonymousContainer";
import UserContainer from "./UserContainer";

export default class Container extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            errors: [],
            messages: [],
            username: undefined,
            password: undefined,
            role: undefined,
            language: undefined,
            displaySpinner: false,
            route: "",
            data: {}
        };
    }

    render() {
        if (this.state.texts === undefined) {
            return "";
        }
        let content;
        if (this.state.username === undefined) {
            content = <AnonymousContainer {...this.state} />;
        } else {
            content = <UserContainer {...this.state} />;
        }
        const errors = this.state.errors ? this.state.errors.map((error, index) => {
            return <div className="toast error"
                        key={index}>{this.state.texts.errors[error.errorKey][this.state.language]}</div>;
        }) : [];
        const messages = this.state.messages ? this.state.messages.map((messageKey, index) => {
            return <div className="toast info"
                        key={index}>{this.state.texts.messages[messageKey][this.state.language]}</div>;
        }) : [];
        return (
            <div>
                <div className="toastContainer">
                    {errors}
                </div>
                <div className="toastContainer">
                    {messages}
                </div>
                {this.state.displaySpinner && <Spinner/>}
                {content}
            </div>
        );
    }
}

