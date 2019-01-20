import React from 'react';
import Spinner from "./Spinner";
import AnonymousContainer from "./AnonymousContainer";
import UserContainer from "./UserContainer";
import ToastContainer from "./ToastContainer";
import AppUtils from "../app/AppUtils";
import * as AppState from "../../gen/ace/AppState";

export default class Container extends React.Component {

    constructor(props) {
        super(props);
        this.state = AppState.getState();
    }

    render() {
        if (this.state.texts === undefined) {
            return "";
        }
        let content;
        if (this.state.loggedInUser &&  this.state.loggedInUser.role) {
            content = <UserContainer {...this.state} />;
        } else {
            content = <AnonymousContainer {...this.state} />;
        }
        return (
            <div>
                <ToastContainer message={this.state.message}/>
                {this.state.displaySpinner && <Spinner/>}
                {content}
                <div className={`footer ${this.state.loggedInUser === undefined ? "fixed" : ""}`}>
                    <div className="footerContent">
                        <h1>{this.state.texts.container.about[this.state.language]}</h1>
                        <p>
                            Annette Pohl &middot; St.-Josef-Str. 20 &middot; 56068 Koblenz
                        </p>
                        <p>
                            0261 1393793 &middot; <a href="mailto:info@anfelisa.com">info@anfelisa.com</a>
                        </p>
                        <p>
                            {this.state.texts.container.version[this.state.language]} {AppUtils.getClientVersion()}
                        </p>
                        {AppUtils.isDevelopment() === true && <a href={`${AppUtils.getAceScenariosBaseUrl()}#/${AppUtils.getAceScenariosApiKey()}/scenarios`} target="ace">ace-scenarios</a>}
                    </div>
                </div>
            </div>
        );
    }
}

