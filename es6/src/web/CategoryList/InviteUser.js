import React from "react";
import InviteUserAction from "../../author/actions/InviteUserAction";

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
        const data = {
            username: this.props.username,
            password: this.props.password,
            categoryId: this.props.parentCategoryId,
            parentCategoryId: this.props.parentCategoryId,
            invitedUsername: this.state.username
        };
        new InviteUserAction(data).apply();
        this.setState({username: ""});
    }

    render() {
        return (
            <div>
                <input
                    type={"text"}
                    placeholder={this.props.texts.categoryList.username[this.props.language]}
                    onChange={this.onUsernameChange}
                    autoComplete="off"
                    value={this.state.username}
                />
                <button onClick={this.onInvite}>{this.props.texts.categoryList.invite[this.props.language]}</button>
            </div>
        );
    }
}

