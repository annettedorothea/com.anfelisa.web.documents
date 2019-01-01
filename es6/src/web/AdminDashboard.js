import React from 'react';
import RouteAction from "../common/actions/RouteAction";

export default class AdminDashboard extends React.Component {

    render() {
        return (
            <button className="bottomMargin" onClick={() => new RouteAction("#users").apply()}>
                {this.props.texts.adminDashboard.users[this.props.language]}
            </button>
        );
    }
}

