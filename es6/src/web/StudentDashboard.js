import React from 'react';
import RouteAction from "../common/actions/RouteAction";
import BoxItem from "./Box/BoxItem";
import EditBoxItem from "./Box/EditBoxItem";

export default class StudentDashboard extends React.Component {

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
                    />
                }
                return <BoxItem
                    key={box.boxId}
                    {...box}
                    texts={this.props.texts}
                />
            });
        }
        return (
            <div>
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

