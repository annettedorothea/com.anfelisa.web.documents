import React from 'react';
import Spinner from "./Spinner";
import Toast from "./Toast";
import AnonymousContainer from "./AnonymousContainer";
import UserContainer from "./UserContainer";
import ToastContainer from "./ToastContainer";

export default class Container extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            toast: undefined,
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
        return (
            <div>
                <ToastContainer toast={this.state.toast}/>
                {this.state.displaySpinner && <Spinner/>}
                {content}
            </div>
        );
    }
}

