import React from 'react';
import DeleteBoxClickAction from "../../box/actions/DeleteBoxClickAction";
import EditBoxAction from "../../box/actions/EditBoxAction";
import RouteAction from "../../common/actions/RouteAction";
import BoxInfo from "./BoxInfo";

export default class BoxItem extends React.Component {

    constructor(props) {
        super(props);
        this.onEdit = this.onEdit.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    onDeleteClick() {
        new DeleteBoxClickAction({boxId: this.props.boxId}).apply();
    }

    onEdit() {
        const data = {
            boxId: this.props.boxId,
            maxInterval: this.props.maxInterval ? this.props.maxInterval : "",
            maxIntervalChecked: !!(this.props.maxInterval && this.props.maxInterval > 0)
        };
        new EditBoxAction(data).apply();
    }

    render() {
        return (
            <div>
                <BoxInfo {...this.props} loadList={true}/>

                <button onClick={() => this.onDeleteClick(this.props.boxId)}>{"\u2717"}</button>
                <button onClick={() => this.onEdit(this.props.boxId)}>{"\u270E"}</button>
                <button onClick={() => new RouteAction(
                    {
                        username: this.props.username,
                        password: this.props.password,
                        hash: `#box/${this.props.boxId}`
                    }).apply()}>{this.props.texts.box.nextCard[this.props.language]}</button>
            </div>
        );
    }
}

