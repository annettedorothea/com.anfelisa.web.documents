import React from 'react';
import RouteAction from "../common/actions/RouteAction";

export default class AdminDashboard extends React.Component {

    render() {
        return (
            <a className="tile " onClick={() => new RouteAction(
                {
                    username: this.props.username,
                    password: this.props.password,
                    hash: "#users"
                }).apply()}>
                <h2>
                    {this.props.texts.adminDashboard.users[this.props.language]}
                </h2>
                <div className="icon userList"/>
            </a>
        );
    }
}

