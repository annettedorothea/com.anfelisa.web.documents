import React from 'react';
import {
    closeInviteUser,
    invitedUsernameChanged,
    revokeUserAccess,
    inviteUser
} from "../../../gen/category/ActionFunctions";

export default class InviteUser extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const userItems = this.props.userList.map((user) => {
            return <li key={user.userId}>
                <div>{user.username}</div>
                <button className="smaller" onClick={() => revokeUserAccess(user.userId)}><i className="fas fa-minus"/></button>
            </li>
        });
        return (
            <div className="modal">
                <div className="modalContent form invitedUsers">
                    <h2>{this.props.texts.categoryTree.inviteUser.title[this.props.language]}</h2>
                    {userItems}
                    <div className="line">
                        <input
                            type={"text"}
                            onChange={(event) => {
                                invitedUsernameChanged(event.target.value);
                            }}
                            autoComplete="off"
                            value={this.props.invitedUsername}
                            placeholder={this.props.texts.categoryTree.inviteUser.username[this.props.language]}
                        />
                        <button className="smaller" onClick={() => inviteUser()}><i className="fas fa-plus"/></button>
                    </div>
                    <button
                        onClick={() => {
                            closeInviteUser()
                        }}
                    >{this.props.texts.categoryTree.inviteUser.close[this.props.language]}</button>
                </div>
            </div>
        );
    }
}

