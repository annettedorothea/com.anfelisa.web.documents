import React from 'react';
import RouteAction from "../common/actions/RouteAction";

export default class AuthorDashboard extends React.Component {

    render() {
        return (
            <a className="tile " onClick={() => new RouteAction(
                {
                    username: this.props.username,
                    password: this.props.password,
                    hash: "#categories"
                }).apply()}>
                <h2>
                    {this.props.texts.authorDashboard.categories[this.props.language]}
                </h2>
                <div className="icon categories"/>
            </a>
        );
    }
}

