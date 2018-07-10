import React from 'react';
import Spinner from "./Spinner";
import AnonymousContainer from "./AnonymousContainer";
import UserContainer from "./UserContainer";

export default class Container extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            errors: [],
            messages: []
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
            return <div key={index}>{this.state.texts.errors[error.errorKey][this.state.language]}</div>;
        }) : [];
        const messages = this.state.messages? this.state.messages.map((messageKey, index) => {
            return <div key={index}>{this.state.texts.messages[messageKey][this.state.language]}</div>;
        }): [];
        return (
            <div>
                {errors}
                {messages}
                {this.state.displaySpinner && <Spinner /> }
                {content}
            </div>
        );
    }
}

