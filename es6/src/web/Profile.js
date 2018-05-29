import React from 'react';
import RouteAction from "../common/actions/RouteAction";
import DeleteUserAction from "../profile/actions/DeleteUserAction";
import Confirm from "./Confirm";

export default class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            confirmDeleteUser: false
        };
        this.onDelete = this.onDelete.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
        this.onDeleteCancel = this.onDeleteCancel.bind(this);
    }

    onDeleteClick() {
        this.setState({confirmDeleteUser: true});
    }

    onDelete() {
        const data = {
            username: this.props.username,
            deletedUsername: this.props.username,
            password: this.props.password
        };
        this.setState({confirmDeleteUser: false});
        new DeleteUserAction(data).apply();
    }

    onDeleteCancel() {
        this.setState({confirmDeleteUser: false});
    }

    render() {
        return (
            <div>
                {this.state.confirmDeleteUser === true &&
                <div>
                    <Confirm {...
                        {
                            title: this.props.texts.profile.confirmDelete.title,
                            message: this.props.texts.profile.confirmDelete.message,
                            okText: this.props.texts.profile.confirmDelete.ok,
                            cancelText: this.props.texts.profile.confirmDelete.cancel,
                            ok: this.onDelete,
                            cancel: this.onDeleteCancel
                        }}/>
                </div>}
                <h1>{this.props.texts.profile.title}</h1>
                <div>
                    <div>
                        <label>{this.props.texts.profile.username}</label>
                        <input
                            type={"text"}
                            placeholder={this.props.texts.profile.username}
                            value={this.props.data.username}
                            readOnly={true}
                        />
                    </div>
                    <div>
                        <label>{this.props.texts.profile.email}</label>
                        <input
                            type={"text"}
                            placeholder={this.props.texts.profile.email}
                            value={this.props.data.email}
                            readOnly={true}
                        />
                    </div>
                    <div>
                        <label>{this.props.texts.profile.role}</label>
                        <input
                            type={"text"}
                            placeholder={this.props.texts.profile.role}
                            value={this.props.data.role}
                            readOnly={true}
                        />
                    </div>
                </div>
                <button onClick={this.onDeleteClick}>{this.props.texts.profile.delete}</button>
                <button
                    onClick={() => new RouteAction({
                        username: this.props.username,
                        password: this.props.password,
                        hash: "#dashboard"
                    }).apply()}>{this.props.texts.profile.back}</button>
            </div>
        );
    }
}

