import React from 'react';
import RouteAction from "../common/actions/RouteAction";
import CardList from "./CardList";
import UserAccessItem from "./CategoryList/UserAccessItem"
import CancelRevokeUserAccessAction from "../author/actions/CancelRevokeUserAccessAction";
import RevokeUserAccessAction from "../author/actions/RevokeUserAccessAction";
import InviteUser from "./CategoryList/InviteUser";
import CategoryList from "./CategoryList";

export default class CategoryOverview extends React.Component {

    constructor(props) {
        super(props);
        this.onRevokeUserAccess = this.onRevokeUserAccess.bind(this);
        this.onRevokeUserAccessCancel = this.onRevokeUserAccessCancel.bind(this);
    }

    onRevokeUserAccess() {
        const data = {
            categoryId: this.props.data.parentCategoryId,
            revokedUserId: this.props.data.revokeUserAccess.userId,
            parentCategoryId: this.props.data.parentCategoryId
        };
        new RevokeUserAccessAction(data).apply();
    }

    onRevokeUserAccessCancel() {
        new CancelRevokeUserAccessAction().apply();
    }

    render() {
        let backLink = "#dashboard";
        if (this.props.data.grandParentCategoryId) {
            backLink = `#categories/${this.props.data.grandParentCategoryId}`;
        } else if (this.props.data.parentCategoryId) {
            backLink = "#categories";
        }
        if (!this.props.data.editedCategory || !this.props.data.newCategory || !this.props.data.deleteCategory) {
            return "";
        }
        const users = this.props.data.userList === null ? [] : this.props.data.userList.map((user) => {
            return <UserAccessItem
                {...user}
                texts={this.props.texts}
                language={this.props.language}
                canRevoke={this.props.data.parentEditable && this.props.data.userList.length > 1}
                key={user.userId}
            />
        });
        if (this.props.data.parentEditable === true && this.props.data.userList !== null) {
            users.push(
                <InviteUser
                    texts={this.props.texts}
                    language={this.props.language}
                    key="inviteUser"
                    parentCategoryId={this.props.data.parentCategoryId}
                    username={this.props.username}
                    password={this.props.password}
                />)
        }

        return (
            <div className="categoryList">

                <button className="backButton"
                        onClick={() => new RouteAction({
                            hash: backLink
                        }).apply()}>
                    {this.props.texts.categoryList.back[this.props.language]}
                </button>
                <h1>
                    {this.props.data.parentCategoryName && this.props.data.parentCategoryName}
                    {!this.props.data.parentCategoryName && this.props.texts.categoryList.title[this.props.language]}
                </h1>
                {users.length > 0 && this.props.data.parentEditable &&
                <div>
                    <ul className="invitedUsers">
                        {users}
                    </ul>
                </div>
                }
                <CategoryList {...this.props} />

                {this.props.data.parentCategoryId && <CardList {...this.props} />}

            </div>
        );
    }
}


