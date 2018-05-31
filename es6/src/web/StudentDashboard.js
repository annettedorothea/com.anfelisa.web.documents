import React from 'react';
import RouteAction from "../common/actions/RouteAction";
import BoxItem from "./Box/BoxItem";
import EditBoxItem from "./Box/EditBoxItem";
import Confirm from "./Confirm";
import CancelDeleteBoxAction from "../box/actions/CancelDeleteBoxAction";
import DeleteBoxAction from "../box/actions/DeleteBoxAction";

export default class StudentDashboard extends React.Component {

    constructor(props) {
        super(props);
        this.onDelete = this.onDelete.bind(this);
        this.onDeleteCancel = this.onDeleteCancel.bind(this);
    }

    onDelete() {
        const data = {
            username: this.props.username,
            password: this.props.password,
            boxId: this.props.data.deleteBox.boxId
        };
        new DeleteBoxAction(data).apply();
    }

    onDeleteCancel() {
        new CancelDeleteBoxAction().apply();
    }

    render() {
        let boxes = "";
        if (this.props.data && this.props.data.boxList) {
            boxes = this.props.data.boxList.map((box) => {
                if (box.boxId === this.props.data.editedBox.boxId) {
                    return <EditBoxItem
                        key={box.boxId}
                        {...box}
                        editedBox={this.props.data.editedBox}
                        texts={this.props.texts}
                        username={this.props.username}
                        password={this.props.password}
                    />
                }
                return <BoxItem
                    key={box.boxId}
                    {...box}
                    texts={this.props.texts}
                    username={this.props.username}
                    password={this.props.password}
                />
            });
        }
        return (
            <div>
                {this.props.data && this.props.data.deleteBox.confirmDelete === true &&
                <div>
                    <Confirm {...
                        {
                            title: this.props.texts.box.confirmDelete.title,
                            message: this.props.texts.box.confirmDelete.message,
                            okText: this.props.texts.box.confirmDelete.ok,
                            cancelText: this.props.texts.box.confirmDelete.cancel,
                            ok: this.onDelete,
                            cancel: this.onDeleteCancel
                        }}/>
                </div>}
                <button onClick={() => new RouteAction(
                    {
                        username: this.props.username,
                        password: this.props.password,
                        hash: "#createbox"
                    }).apply()}>{this.props.texts.studentDashboard.createBox}</button>
                {boxes}
            </div>
        );
    }
}

