import React from 'react';
import {route} from "../../gen/common/ActionFunctions";
import {deleteUser, deleteUserCancel, deleteUserClick, saveRole} from "../../gen/admin/ActionFunctions";
import ConfirmDanger from "./ConfirmDanger";

export default class UserList extends React.Component {

    constructor(props) {
        super(props);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    onDeleteClick(usernameToBeDeleted) {
        deleteUserClick(usernameToBeDeleted);
    }

    render() {
        console.log(this.props);
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

class UserItem extends React.Component {

    render() {
        return (
            <tr>
                <td>{this.props.username}</td>
                <td><RoleSelect {...this.props} /></td>
                <td>{this.props.email}</td>
                <td>{this.props.emailConfirmed === true ? <i className="fas fa-check success"/> :
                    <i className="fas fa-times error"/>}</td>
                <td>
                    <button
                        disabled={this.props.username === this.props.myUsername}
                        onClick={() => this.props.onDeleteClick(this.props.username)}
                        className="danger">
                        <i className="fas fa-times"/>
                    </button>
                </td>
            </tr>
        );
    }
}

class RoleSelect extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <select
                onChange={(event) => saveRole(this.props.userId, event.target.value)}
                defaultValue={this.props.role}
                disabled={this.props.username === this.props.myUsername}
            >
                <option value="STUDENT">{this.props.texts.userList.roles["STUDENT"][this.props.language]}</option>
                <option value="ADMIN">{this.props.texts.userList.roles["ADMIN"][this.props.language]}</option>
            </select>
        );
    }

}

