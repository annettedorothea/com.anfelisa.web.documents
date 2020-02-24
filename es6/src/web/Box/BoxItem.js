import React from 'react';
import Statistics from "./Statistics";
import {deleteBoxClick} from "../../../gen/box/ActionFunctions";
import {route} from "../../../gen/common/ActionFunctions"
import Progress from "./Progress";

export default class BoxItem extends React.Component {

    constructor(props) {
        super(props);
        this.onDeleteClick = this.onDeleteClick.bind(this);
        this.onEditClick = this.onEditClick.bind(this);
        this.onSettingsClick = this.onSettingsClick.bind(this);
    }

    onDeleteClick(e) {
        e.stopPropagation();
        deleteBoxClick(this.props.boxId);
    }

    onEditClick(e) {
        e.stopPropagation();
        route(`#categories/${this.props.categoryId}`);
    }

    onSettingsClick(e) {
        e.stopPropagation();
        route(`#box/settings/${this.props.boxId}`);
    }

    render() {
        return (
            <a
                className="tile"
                onClick={() =>
                    this.props.allTodaysCards > 0 ?
                        route(`#box/${this.props.boxId}`) :
                        route(`#categories/${this.props.categoryId}`)
                }>

                <h2>
                    {this.props.categoryName}
                </h2>

                <Progress openTodaysCards={this.props.openTodaysCards} allTodaysCards={this.props.allTodaysCards}/>

                <Statistics {...this.props}/>

                <div className="buttons button1">
                    <i className="fas fa-edit" onClick={(e) => this.onEditClick(e)}/>
                </div>
                <div className="buttons button2">
                    <i className="fas fa-cog" onClick={(e) => this.onSettingsClick(e)}/>
                </div>
                <div className="buttons button3">
                    <i className="fas fa-times fa-lg danger" onClick={(e) => this.onDeleteClick(e)}/>
                </div>
                {this.props.openTodaysCards > 0 && <span className="badge">{this.props.openTodaysCards}</span>}
            </a>
        );
    }
}



