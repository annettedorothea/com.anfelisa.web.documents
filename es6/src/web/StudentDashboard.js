import React from 'react';
import BoxItem from "./Box/BoxItem";
import {cancelDeleteBox, deleteBox} from "../../gen/box/ActionFunctions"
import {route} from "../../gen/common/ActionFunctions"
import ConfirmDanger from "./ConfirmDanger";

export default class StudentDashboard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let boxes = "";
        if (this.props && this.props.boxList) {
            boxes = this.props.boxList.map((box) => {
                return <BoxItem
                    key={box.boxId}
                    {...box}
                    texts={this.props.texts}
                    language={this.props.language}
                />
            });
        }
        return (
            <div className="bottomMargin">
                {this.props.deleteBox && this.props.deleteBox.confirmDelete === true &&
                <div>
                    <ConfirmDanger {...
                        {
                            title: this.props.texts.box.confirmDelete.title[this.props.language],
                            message: this.props.texts.box.confirmDelete.message[this.props.language],
                            okText: this.props.texts.box.confirmDelete.ok[this.props.language],
                            cancelText: this.props.texts.box.confirmDelete.cancel[this.props.language],
                            ok: () => deleteBox(this.props.deleteBox.boxId),
                            cancel: () => cancelDeleteBox()
                        }}/>
                </div>}
                {boxes}
                <a
                    className="tile"
                    onClick={() => route("#box/create")}>
                    <div className="text-center">
                        <i className="fas fa-plus-circle fa-2x"/>
                    </div>
                </a>
            </div>
        );
    }
}

