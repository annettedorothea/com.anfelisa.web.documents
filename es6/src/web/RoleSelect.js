import React from 'react';
import {saveRole} from "../../gen/admin/ActionFunctions";

export default class RoleSelect extends React.Component {

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

