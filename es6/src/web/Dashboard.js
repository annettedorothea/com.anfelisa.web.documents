import React from 'react';
import RouteAction from "../common/actions/RouteAction";
import AdminDashboard from "./AdminDashboard";
import AuthorDashboard from "./AuthorDashboard";
import StudentDashboard from "./StudentDashboard";

export default class Dashboard extends React.Component {

    render() {
        let adminContent;
        let authorContent;
        let userContent;
        if (this.props.role === "ADMIN") {
            adminContent = <AdminDashboard {...this.props} />
        }
        if (this.props.role === "STUDENT" || this.props.role === "ADMIN") {
            authorContent = <AuthorDashboard {...this.props} />
            userContent = <StudentDashboard {...this.props}/>;
        }
        return (
            <div>
                <h1>{this.props.texts.dashboard.title[this.props.language]}</h1>
                <button onClick={() => new RouteAction(
                    {
                        hash: "#profile",
                        username: this.props.username,
                        password: this.props.password
                    }).apply()}>{this.props.texts.dashboard.profile[this.props.language]}</button>
                {adminContent}
                {authorContent}
                {userContent}
            </div>
        );
    }
}

