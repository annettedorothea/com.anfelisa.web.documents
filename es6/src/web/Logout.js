import React from "react";
import {logout, route} from "../../gen/common/ActionFunctions";

export default class Logout extends React.Component {

    render() {
        return (
            <div className="right">
                <a onClick={() => route("#profile")}>
                    {this.props.loggedInUser.username}
                </a>
                <button
                    onClick={() => logout()}>{this.props.texts.logout.signout[this.props.language]}</button>
            </div>
        );
    }
}

