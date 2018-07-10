import React from "react";
import LogoutAction from "../common/actions/LogoutAction";

export default class Logout extends React.Component {

    render() {
        return (
            <div>
                <div>
                    {this.props.username}
                </div>
                <div>
                    <button onClick={() => new LogoutAction().apply()}>{this.props.texts.logout.signout[this.props.language]}</button>
                </div>
            </div>
        );
    }
}

