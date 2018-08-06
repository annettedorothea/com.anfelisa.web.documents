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
                <div className={`footer ${this.state.username === undefined ? "fixed" : ""}`}>
                    <div className="footerContent">
                        <h1>Impressum</h1>
                        <p>
                            Annette Pohl &middot; St.-Josef-Str. 20 &middot; 56068 Koblenz
                        </p>
                        <p>
                            0261 1393793 &middot; <a href="mailto:info@anfelisa.com">info@anfelisa.com</a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

