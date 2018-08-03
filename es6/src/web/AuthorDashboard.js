import React from 'react';
import RouteAction from "../common/actions/RouteAction";

export default class AuthorDashboard extends React.Component {

    render() {
        return (
            <button className="primary bottomMargin" onClick={() => new RouteAction(
                {
                    hash: "#categories"
                }).apply()}>
                    {this.props.texts.authorDashboard.categories[this.props.language]}
            </button>
        );
    }
}

