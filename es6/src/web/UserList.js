import React from 'react';
import {route} from "../../gen/common/ActionFunctions";
import {deleteUser, deleteUserCancel, deleteUserClick} from "../../gen/admin/ActionFunctions";
import ConfirmDanger from "./ConfirmDanger";
import UserItem from "./UserItem";

export default class UserList extends React.Component {

    constructor(props) {
        super(props);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    onDeleteClick(usernameToBeDeleted) {
        deleteUserClick(usernameToBeDeleted);
    }

    render() {
        const userItems = this.props.userList.map((user) => {
            return <UserItem
                {...user}
                key={user.userId}
                texts={this.props.texts}
                language={this.props.language}
                myUsername={this.props.username}
                myPassword={this.props.password}
                onDeleteClick={this.onDeleteClick}
            />
        });
        return (
            <div>
                {this.props.showDeleteUserDialog === true &&
                <div>
                    <ConfirmDanger {...
                        {
                            title: this.props.texts.userList.confirmDelete.title[this.props.language],
                            message: this.props.texts.userList.confirmDelete.message[this.props.language].replace("{0}", this.props.usernameToBeDeleted),
                            okText: this.props.texts.userList.confirmDelete.ok[this.props.language],
                            cancelText: this.props.texts.userList.confirmDelete.cancel[this.props.language],
                            ok: () => deleteUser(),
                            cancel: () => deleteUserCancel()
                        }}/>
                </div>}
                <h1>
                    <button
                        onClick={() => route("#dashboard")}><i className="fa fa-arrow-left"/>
                    </button>
                    {this.props.texts.userList.title[this.props.language]}
                </h1>
                <table className="adminUserList">
                    <thead>

                    </thead>
                    <tbody>
                    {userItems}
                    </tbody>
                </table>

            </div>
        );
    }
}



