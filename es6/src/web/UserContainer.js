import React from 'react';
import Dashboard from "./Dashboard";
import Logout from "./Logout";
import Profile from "./Profile";
import UserList from "./UserList";
import QueryCards from "./Box/QueryCards";
import CategoryCardSplitView from "./CategoryCardSplitView";
import {route} from "../../gen/common/ActionFunctions";
import BoxSettings from "./Box/BoxSettings";

export default class UserContainer extends React.Component {

    render() {
        let content;
        if (this.props.userListView) {
            content = <UserList
                {...this.props.userListView}
                texts={this.props.texts}
                language={this.props.language}
            />;
        } else if (this.props.authorView) {
            content = <CategoryCardSplitView
                {...this.props.authorView}
                texts={this.props.texts}
                language={this.props.language}
            />;
        } else if (this.props.profileView) {
            content = <Profile
                {...this.props.profileView}
                texts={this.props.texts}
                language={this.props.language}
            />;
        } else if (this.props.cardView) {
            content = <QueryCards
                {...this.props.cardView}
                texts={this.props.texts}
                language={this.props.language}
            />;
        } else if (this.props.boxSettingsView) {
            content = <BoxSettings
                {...this.props.boxSettingsView}
                texts={this.props.texts}
                language={this.props.language}
            />;
        } else if (this.props.dashboardView) {
            content = <Dashboard
                {...this.props.dashboardView}
                role={this.props.loggedInUser.role}
                texts={this.props.texts}
                language={this.props.language}
            />;
        } else {
            content = <div />
        }

        return (
            <div className="wrapper">
                <div className="header">
                    <a onClick={() => route("#dashboard")}
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

