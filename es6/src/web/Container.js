import React from 'react';
import Spinner from "./Spinner";
import AnonymousContainer from "./AnonymousContainer";
import UserContainer from "./UserContainer";
import ToastContainer from "./ToastContainer";
import * as App from "../app/App";

export default class Container extends React.Component {

    constructor(props) {
        super(props);
        this.state = App.appState;
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
                <ToastContainer toast={this.state.toast}/>
                {this.state.displaySpinner && <Spinner/>}
                {content}
            </div>
        );
    }
}

