import React from 'react';
import {
    cancelEditCategory, cancelInviteUser,
    categoryNameChanged,
    invitedUsernameChanged, inviteUser,
    updateCategory
} from "../../../gen/category/ActionFunctions";

export default class InviteUser extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let usernames = [];
        if (this.props.usernames) {
            usernames = this.props.usernames.map(username => {
                return <li key={username}><a onClick={() => inviteUser(username)}>{username}</a></li>
            })
        }
        let invitedUsernames = [];
        if (this.props.invitedUsernames) {
            invitedUsernames = this.props.invitedUsernames.map(username => {
                return <li key={username}><a>{username}</a></li>
            })
        }
        return (
            <div className="modal">
                <div className="modalContent form">
                    <h2>{this.props.texts.categoryTree.inviteUser.title[this.props.language]}</h2>
                    {invitedUsernames.length > 0 && <div className="line">
                        <h3>{this.props.texts.categoryTree.inviteUser.alreadyInvited[this.props.language]}</h3>
                        <ul>
                            {invitedUsernames}
                        </ul>
                    </div>}
                    <div className="line">
                        <input
                            type={"text"}
                            onChange={(event) => invitedUsernameChanged(event.target.value)}
                            autoComplete="off"
                            value={this.props.usernameSearchString}
                            placeholder={this.props.texts.categoryTree.inviteUser.username[this.props.language]}
                        />
                    </div>
                    <div className="line">
                        <ul>
                            {usernames}
                        </ul>
                    </div>
                    <button
                        onClick={() => cancelInviteUser()}
                    >{this.props.texts.categoryTree.inviteUser.cancel[this.props.language]}</button>
                </div>
            </div>
        )
            ;
    }
}

