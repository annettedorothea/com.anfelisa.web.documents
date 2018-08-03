import React from 'react';
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
                        language={this.props.language}
                        username={this.props.username}
                        password={this.props.password}
                    />
                }
                return <BoxItem
                    key={box.boxId}
                    {...box}
                    texts={this.props.texts}
                    language={this.props.language}
                    username={this.props.username}
                    password={this.props.password}
                />
            });
        }
        return (
            <div className="bottomMargin">
                {this.props.data && this.props.data.deleteBox && this.props.data.deleteBox.confirmDelete === true &&
                <div>
                    <Confirm {...
                        {
                            title: this.props.texts.box.confirmDelete.title[this.props.language],
                            message: this.props.texts.box.confirmDelete.message[this.props.language],
                            okText: this.props.texts.box.confirmDelete.ok[this.props.language],
                            cancelText: this.props.texts.box.confirmDelete.cancel[this.props.language],
                            ok: this.onDelete,
                            cancel: this.onDeleteCancel
                        }}/>
                </div>}
                {boxes}
            </div>
        );
    }
}

