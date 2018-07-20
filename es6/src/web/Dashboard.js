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
                <div>
                    {adminContent}
                    {authorContent}
                </div>
                <div>
                    {userContent}
                </div>
            </div>
        );
    }
}

