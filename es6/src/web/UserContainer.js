import React from 'react';
import Dashboard from "./Dashboard";
import Logout from "./Logout";
import Profile from "./Profile";
import UserList from "./UserList";
import CategoryList from "./CategoryList";
import CreateBox from "./CreateBox";

export default class UserContainer extends React.Component {

    render() {
        let content;
        console.log("UserContainer");
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
            case "create-box":
                content = <CreateBox {...this.props} />;
                break;
            case "dashboard":
            default:
                content = <Dashboard {...this.props} />;
        }

        return (
            <div>
                <Logout {...this.props} />
                <div>
                    {content}
                </div>
            </div>
        );
    }
}

