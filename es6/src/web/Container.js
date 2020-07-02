import React from 'react';
import Spinner from "./Spinner";
import AnonymousContainer from "./AnonymousContainer";
import UserContainer from "./UserContainer";
import ToastContainer from "./ToastContainer";
import Utils from "../../gen/ace/Utils";
import * as AppState from "../../gen/ace/AppState";
import Confirm from "./Confirm";
import {callSaveBug, cancelSaveBugDialog} from "../../gen/common/ActionFunctions";

export default class Container extends React.Component {

    constructor(props) {
        super(props);
        this.state = AppState.getAppState();
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
                {this.state.displaySaveBugDialog === true &&
                <div>
                    <Confirm {...
                        {
                            title: this.state.texts.container.unexpectedBug[this.state.language],
                            message: this.state.texts.container.unexpectedBugMessage[this.state.language],
                            okText: this.state.texts.container.yes[this.state.language],
                            cancelText: this.state.texts.container.no[this.state.language],
                            ok: () => callSaveBug(),
                            cancel: () => cancelSaveBugDialog()
                        }}/>
                </div>}
                {content}
                <div className={`footer ${this.state.loggedInUser === undefined ? "fixed" : ""}`}>
                    <div className="footerContent">
                        <h1>{this.state.texts.container.about[this.state.language]}</h1>
                        <p>
                            Annette Pohl &middot; St.-Josef-Str. 20 &middot; 56068 Koblenz
                        </p>
                        <p>
                            0261 1393793 &middot; <a href="mailto:info@anfelisa.de">info@anfelisa.de</a>
                        </p>
                        <p>
                            {this.state.texts.container.version[this.state.language]} {Utils.getClientVersion()}
                        </p>
                        {Utils.isDevelopment() === true && <a href={`${Utils.getAceScenariosBaseUrl()}#/${Utils.getAceScenariosApiKey()}/scenarios`} target="ace">ace-scenarios</a>}
                    </div>
                </div>
            </div>
        );
    }
}

