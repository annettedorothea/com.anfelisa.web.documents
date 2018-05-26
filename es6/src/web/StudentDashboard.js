import React from 'react';
import RouteAction from "../common/actions/RouteAction";
import BoxItem from "./Box/BoxItem";

export default class StudentDashboard extends React.Component {

    render() {
        console.log("StudentDashboard", this.props);
        let boxes = "";
        if (this.props.data && this.props.data.boxList) {
            boxes = this.props.data.boxList.map((box) => {
                console.log("box", box);
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

