import React from 'react';
import RouteAction from "../common/actions/RouteAction";
import DeleteUserAction from "../admin/actions/DeleteUserAction";
import Confirm from "./Confirm";
import SaveRoleAction from "../admin/actions/SaveRoleAction";
import DeleteUserClickAction from "../admin/actions/DeleteUserClickAction";
import DeleteUserCancelAction from "../admin/actions/DeleteUserCancelAction";

export default class UserList extends React.Component {

    constructor(props) {
        super(props);
        this.onDelete = this.onDelete.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
        this.onDeleteCancel = this.onDeleteCancel.bind(this);
    }

    onDeleteClick(usernameToBeDeleted) {
        new DeleteUserClickAction(usernameToBeDeleted).apply();
    }

    onDelete() {
        new DeleteUserAction().apply();
    }

    onDeleteCancel() {
        new DeleteUserCancelAction().apply();
    }

    render() {
        const userItems = this.props.data.userList.map((user) => {
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
                {this.props.data.showDeleteUserDialog === true &&
                <div>
                    <Confirm {...
                        {
                            title: this.props.texts.userList.confirmDelete.title[this.props.language],
                            message: this.props.texts.userList.confirmDelete.message[this.props.language],
                            okText: this.props.texts.userList.confirmDelete.ok[this.props.language],
                            cancelText: this.props.texts.userList.confirmDelete.cancel[this.props.language],
                            ok: this.onDelete,
                            cancel: this.onDeleteCancel
                        }}/>
                </div>}
                <h1>{this.props.texts.userList.title[this.props.language]}</h1>
                <table className="adminUserList">
                    <thead>

                    </thead>
                    <tbody>
                    {userItems}
                    </tbody>
                </table>
                <button
                    onClick={() => new RouteAction("#dashboard").apply()}>{this.props.texts.userList.back[this.props.language]}
                </button>

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
        this.onChangeRole = this.onChangeRole.bind(this);
    }

    onChangeRole(event) {
        new SaveRoleAction(this.props.userId, event.target.value).apply();
    }

    render() {
        return (
            <select
                onChange={this.onChangeRole}
                defaultValue={this.props.role}
                disabled={this.props.username === this.props.myUsername}
            >
                <option value="STUDENT">{this.props.texts.userList.roles["STUDENT"][this.props.language]}</option>
                <option value="ADMIN">{this.props.texts.userList.roles["ADMIN"][this.props.language]}</option>
            </select>
        );
    }

}

