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
        return (
            <div>
                {this.state.error && <label>{this.state.texts.errors[this.state.error.errorKey]}</label> }
                {this.state.displaySpinner && <Spinner /> }
                {content}
            </div>
        );
    }
}

