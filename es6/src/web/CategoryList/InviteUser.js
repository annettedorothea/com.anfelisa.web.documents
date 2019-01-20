import React from "react";
import {inviteUser} from "../../../gen/category/ActionFunctions";

export default class InviteUser extends React.Component {

    constructor(props) {
        super(props);
        this.onInvite = this.onInvite.bind(this);
        this.state = {
            username: ""
        };
        this.onUsernameChange = this.onUsernameChange.bind(this);
    }

    onUsernameChange(event) {
        const username = event.target.value;
        this.setState({username});
    }

    onInvite() {
        inviteUser(this.state.username);
        this.setState({username: ""});
    }

    render() {
        return (
            <li>
                <input
                    type={"text"}
                    placeholder={this.props.texts.categoryList.invitedUsers.username[this.props.language]}
                    onChange={this.onUsernameChange}
                    autoComplete="off"
                    value={this.state.username}
                />
                <button onClick={this.onInvite}>{this.props.texts.categoryList.invitedUsers.invite[this.props.language]}</button>
            </li>
        );
    }
}

