import React from 'react';
import DeleteBoxClickAction from "../../box/actions/DeleteBoxClickAction";
import EditBoxAction from "../../box/actions/EditBoxAction";
import RouteAction from "../../common/actions/RouteAction";
import BoxInfo from "./BoxInfo";
import Statistics from "./Statistics";

export default class BoxItem extends React.Component {

    constructor(props) {
        super(props);
        this.onEdit = this.onEdit.bind(this);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    onDeleteClick(e) {
        e.stopPropagation();
        new DeleteBoxClickAction({boxId: this.props.boxId}).apply();
    }

    onEdit(e) {
        e.stopPropagation();
        const data = {
            boxId: this.props.boxId,
            maxInterval: this.props.maxInterval ? this.props.maxInterval : "",
            maxIntervalChecked: !!(this.props.maxInterval && this.props.maxInterval > 0)
        };
        new EditBoxAction(data).apply();
    }

    render() {
        return (
            <a
                className="tile double"
                onClick={() => new RouteAction(
                    {
                        hash: `#box/${this.props.boxId}`
                    }).apply()}>

                <h2>{this.props.categoryName}</h2>

                <BoxInfo {...this.props}/>

                <Statistics {...this.props}/>

                <div className="buttons">
                    <i className="fas fa-pencil-alt fa-lg primary" onClick={(e) => this.onEdit(e)}/>
                    <i className="fas fa-times fa-lg danger" onClick={(e) => this.onDeleteClick(e)}/>
                </div>
            </a>
        );
    }
}

