import React from 'react';
import Dashboard from "./Dashboard";
import Logout from "./Logout";
import Profile from "./Profile";
import UserList from "./UserList";
import QueryCards from "./Box/QueryCards";
import CategoryCardSplitView from "./CategoryCardSplitView";
import {route} from "../../gen/common/ActionFunctions";
import BoxSettings from "./Box/BoxSettings";
import CardList from "./CardList/CardList";
import ActiveCardList from "./Box/ActiveCardList";
import PrivacyPolicy from "./PrivacyPolicy";

export default class UserContainer extends React.Component {

    render() {
        let content;
        if (this.props.mainView) {
            if (this.props.mainView.isUserListView) {
                content = <UserList
                    {...this.props.mainView}
                    texts={this.props.texts}
                    language={this.props.language}
                />;
            } else if (this.props.mainView.isAuthorView) {
                content = <CategoryCardSplitView
                    {...this.props.mainView}
                    texts={this.props.texts}
                    language={this.props.language}
                />;
            } else if (this.props.mainView.isProfileView) {
                content = <Profile
                    {...this.props.mainView}
                    texts={this.props.texts}
                    language={this.props.language}
                />;
            } else if (this.props.mainView.isCardView) {
                content = <QueryCards
                    {...this.props.mainView}
                    texts={this.props.texts}
                    language={this.props.language}
                />;
            } else if (this.props.mainView.isBoxSettingsView) {
                content = <BoxSettings
                    {...this.props.mainView}
                    texts={this.props.texts}
                    language={this.props.language}
                />;
            } else if (this.props.mainView.isAllActiveCardsView) {
                content = <ActiveCardList
                    {...this.props.mainView}
                    texts={this.props.texts}
                    language={this.props.language}
                />;
            } else if (this.props.mainView.isDashboardView) {
                content = <Dashboard
                    {...this.props.mainView}
                    role={this.props.loggedInUser.role}
                    texts={this.props.texts}
                    language={this.props.language}
                />;
            } else if (this.props.mainView.isPrivacyPolicyView) {
                content = <PrivacyPolicy
                    texts={this.props.texts}
                    language={this.props.language}
                />;
            } else {
                content = <div/>
            }
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

