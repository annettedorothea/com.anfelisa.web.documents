import React from 'react';
import RouteAction from "../common/actions/RouteAction";

export default class StudentDashboard extends React.Component {

    render() {
        return (
            <div>
                <button onClick={() => new RouteAction(
                    {
                        username: this.props.username,
                        password: this.props.password,
                        hash: "#createbox"
                    }).apply()}>{this.props.texts.studentDashboard.createBox}</button>
            </div>
        );
    }
}

