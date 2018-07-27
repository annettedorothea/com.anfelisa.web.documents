import React from 'react';
import Dashboard from "./Dashboard";
import Logout from "./Logout";
import Profile from "./Profile";
import UserList from "./UserList";
import CategoryList from "./CategoryList";
import QueryCards from "./Box/QueryCards";
import RouteAction from "../common/actions/RouteAction";

export default class UserContainer extends React.Component {

    render() {
        let content;
        switch (this.props.route) {
            case "user-list":
                content = <UserList {...this.props} />;
                break;
            case "category-list":
                content = <CategoryList {...this.props} />;
                break;
            case "profile":
                content = <Profile {...this.props} />;
                break;
            case "card":
                content = <QueryCards {...this.props} />;
                break;
            case "reinforce-card":
                content = <QueryCards {...this.props} />;
                break;
            case "dashboard":
            default:
                content = <Dashboard {...this.props} />;
        }

        return (
            <div className="wrapper">
                <div className="header">
                    <a onClick={() => new RouteAction({
                        hash: "#dashboard"
                    }).apply()}
                       className="title">Anfelisa</a>
                    <Logout {...this.props} />
                </div>
                <div className="content">
                    {content}
                </div>
            </div>
        );
    }
}

