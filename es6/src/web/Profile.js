import React from 'react';
import Confirm from "./Confirm";
import {deleteUser, deleteUserCancel, deleteUserClick} from "../../gen/profile/ActionFunctions";
import {route} from "../../gen/common/ActionFunctions";

export default class Profile extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.showDeleteUserDialog === true &&
                <div>
                    <Confirm {...
                        {
                            title: this.props.texts.profile.confirmDelete.title[this.props.language],
                            message: this.props.texts.profile.confirmDelete.message[this.props.language],
                            okText: this.props.texts.profile.confirmDelete.ok[this.props.language],
                            cancelText: this.props.texts.profile.confirmDelete.cancel[this.props.language],
                            ok: () => deleteUser(this.props.username),
                            cancel: () => deleteUserCancel()
                        }}/>
                </div>}
                <div className="form">
                    <h1>{this.props.texts.profile.title[this.props.language]}</h1>
                    <div className="line">
                        <label>{this.props.texts.profile.username[this.props.language]}</label>
                        <input
                            type={"text"}
                            placeholder={this.props.texts.profile.username[this.props.language]}
                            value={this.props.username}
                            readOnly={true}
                        />
                    </div>
                    <div className="line">
                        <label>{this.props.texts.profile.email[this.props.language]}</label>
                        <input
                            type={"text"}
                            placeholder={this.props.texts.profile.email[this.props.language]}
                            value={this.props.email}
                            readOnly={true}
                        />
                    </div>
                    <div className="line">
                        <label>{this.props.texts.profile.role[this.props.language]}</label>
                        <input
                            type={"text"}
                            placeholder={this.props.texts.profile.role[this.props.language]}
                            value={this.props.texts.profile.role[this.props.role][this.props.language]}
                            readOnly={true}
                        />
                    </div>
                </div>
                <button className="danger"
                        onClick={() => deleteUserClick()}>{this.props.texts.profile.delete[this.props.language]}</button>
                <button
                    onClick={() => route("#dashboard")}>{this.props.texts.profile.back[this.props.language]}</button>
            </div>
        );
    }
}

