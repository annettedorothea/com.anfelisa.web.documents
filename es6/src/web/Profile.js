import React from 'react';
import RouteAction from "../common/actions/RouteAction";
import DeleteUserAction from "../profile/actions/DeleteUserAction";
import Confirm from "./Confirm";
import DeleteUserClickAction from "../profile/actions/DeleteUserClickAction";
import DeleteUserCancelAction from "../profile/actions/DeleteUserCancelAction";

export default class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.onDelete = this.onDelete.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
        this.onDeleteCancel = this.onDeleteCancel.bind(this);
    }

    onDeleteClick() {
        new DeleteUserClickAction().apply();
    }

    onDelete() {
        new DeleteUserAction(this.props.username).apply();
    }

    onDeleteCancel() {
        new DeleteUserCancelAction().apply();
    }

    render() {
        return (
            <div>
                {this.props.data.showDeleteUserDialog === true &&
                <div>
                    <Confirm {...
                        {
                            title: this.props.texts.profile.confirmDelete.title[this.props.language],
                            message: this.props.texts.profile.confirmDelete.message[this.props.language],
                            okText: this.props.texts.profile.confirmDelete.ok[this.props.language],
                            cancelText: this.props.texts.profile.confirmDelete.cancel[this.props.language],
                            ok: this.onDelete,
                            cancel: this.onDeleteCancel
                        }}/>
                </div>}
                <div className="form">
                    <h1>{this.props.texts.profile.title[this.props.language]}</h1>
                    <div className="line">
                        <label>{this.props.texts.profile.username[this.props.language]}</label>
                        <input
                            type={"text"}
                            placeholder={this.props.texts.profile.username[this.props.language]}
                            value={this.props.data.username}
                            readOnly={true}
                        />
                    </div>
                    <div className="line">
                        <label>{this.props.texts.profile.email[this.props.language]}</label>
                        <input
                            type={"text"}
                            placeholder={this.props.texts.profile.email[this.props.language]}
                            value={this.props.data.email}
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
                        onClick={this.onDeleteClick}>{this.props.texts.profile.delete[this.props.language]}</button>
                <button
                    onClick={() => new RouteAction("#dashboard").apply()}>{this.props.texts.profile.back[this.props.language]}</button>
            </div>
        );
    }
}

