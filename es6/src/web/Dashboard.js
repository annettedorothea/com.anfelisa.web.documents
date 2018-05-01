import React from 'react';
import RouteAction from "../common/actions/RouteAction";
import AdminDashboard from "./AdminDashboard";

export default class Dashboard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        let adminContent;
        let authorContent;
        if (this.props.role === "ADMIN") {
            adminContent = <AdminDashboard {...this.props} />
        }
        if (this.props.role === "AUTHOR" || this.props.role === "ADMIN") {
            authorContent = <div>author</div>
        }
        return (
            <div>
                <h1>{this.props.texts.dashboard.title}</h1>
                <button onClick={() => new RouteAction(
                    {
                        hash: "#profile",
                        username: this.props.username,
                        password: this.props.password
                    }).apply()}>{this.props.texts.dashboard.profile}</button>
                {adminContent}
                {authorContent}
            </div>
        );
    }
}

