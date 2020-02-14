import React from 'react';
import AdminDashboard from "./AdminDashboard";
import StudentDashboard from "./StudentDashboard";

export default class Dashboard extends React.Component {

    render() {
        let adminContent;
        let userContent;
        if (this.props.role === "ADMIN") {
            adminContent = <AdminDashboard {...this.props} />
        }
        if (this.props.role === "STUDENT" || this.props.role === "ADMIN") {
            userContent = <StudentDashboard {...this.props}/>;
        }
        return (
            <div>
                <div>
                    {userContent}
                </div>
                <div>
                    {adminContent}
                </div>
            </div>
        );
    }
}

