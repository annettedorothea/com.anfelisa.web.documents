import React from 'react';
import RouteAction from "../common/actions/RouteAction";

export default class AdminDashboard extends React.Component {

    render() {
        return (
            <div>
                <button
                    onClick={() => new RouteAction(
                    {
                        username: this.props.username,
                        password: this.props.password,
                        hash: "#users"
                    }).apply()}
                >{this.props.texts.adminDashboard.users[this.props.language]}</button>
            </div>
        );
    }
}

