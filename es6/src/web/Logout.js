import React from "react";
import LogoutAction from "../common/actions/LogoutAction";
import RouteAction from "../common/actions/RouteAction";

export default class Logout extends React.Component {

    render() {
        return (
            <div className="right">
                <a onClick={() => new RouteAction(
                    {
                        hash: "#profile"
                    }).apply()}>
                    {this.props.username}
                </a>
                <button
                    onClick={() => new LogoutAction().apply()}>{this.props.texts.logout.signout[this.props.language]}</button>
            </div>
        );
    }
}

