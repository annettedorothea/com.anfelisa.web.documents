import React from 'react';
import RouteAction from "../common/actions/RouteAction";

export default class AuthorDashboard extends React.Component {

    render() {
        return (
            <div>
                <button onClick={() => new RouteAction(
                    {
                        username: this.props.username,
                        password: this.props.password,
                        hash: "#categories"
                    }).apply()}>{this.props.texts.authorDashboard.categories}</button>
            </div>
        );
    }
}

