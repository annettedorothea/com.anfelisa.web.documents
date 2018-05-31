import React from 'react';
import Spinner from "./Spinner";
import AnonymousContainer from "./AnonymousContainer";
import UserContainer from "./UserContainer";

export default class Container extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
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
        const errors = this.state.errors ? this.state.errors.map((error) => {
            return <div>{this.state.texts.errors[error.errorKey]}</div>;
        }) : [];
        const messages = this.state.messages? this.state.messages.map((messageKey) => {
            return <div>{this.state.texts.errors[messageKey]}</div>;
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

