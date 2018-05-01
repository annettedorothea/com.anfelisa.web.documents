import React from 'react';
import RouteAction from "../common/actions/RouteAction";

export default class AdminDashboard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button onClick={() => new RouteAction(
                    {
                        hash: "#users"
                    }).apply()}>{this.props.texts.adminDashboard.users}</button>
            </div>
        );
    }
}

