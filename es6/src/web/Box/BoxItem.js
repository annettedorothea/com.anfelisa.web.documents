import React from 'react';
import Statistics from "./Statistics";
import CardsNextDays from "./CardsNextDays";
import {deleteBoxClick} from "../../../gen/box/ActionFunctions";
import {route} from "../../../gen/common/ActionFunctions"

export default class BoxItem extends React.Component {

    constructor(props) {
        super(props);
        this.onDeleteClick = this.onDeleteClick.bind(this);
        this.onEditClick = this.onEditClick.bind(this);
        this.onSettingsClick = this.onSettingsClick.bind(this);
        this.categoryRoute = `#categories/${this.props.categoryId}${this.props.reverse ? "/reverse" : ""}`;
    }

    onDeleteClick(e) {
        e.stopPropagation();
        if (this.props.reverse || !this.props.shared) {
            deleteBoxClick(this.props.boxId);
        }
    }

    onEditClick(e) {
        e.stopPropagation();
        route(this.categoryRoute);
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
                    this.props.openTodaysCards > 0 ?
                        route(`#box/${this.props.boxId}`) :
                        route(this.categoryRoute)
                }>

                <h2>
                    {this.props.categoryName} {this.props.reverse && <i className="fas fa-arrows-alt-h"/>}
                </h2>

                <Statistics {...this.props}/>

                <br/>

                <CardsNextDays {...this.props}/>

                <div className="buttons button1">
                    <i
                        className="fas fa-edit"
                        onClick={(e) => this.onEditClick(e)}
                        title={this.props.texts.box.edit[this.props.language]}
                    />
                </div>
                <div className="buttons button2">
                    <i
                        className="fas fa-cog"
                        onClick={(e) => this.onSettingsClick(e)}
                        title={this.props.texts.box.settings[this.props.language]}
                    />
                </div>
                <div className="buttons button3">
                    <i
                        className={`far fa-trash-alt ${this.props.shared && !this.props.reverse ? "disabled" : "danger"}`}
                        onClick={(e) => this.onDeleteClick(e)}
                        title={this.props.shared && !this.props.reverse ? this.props.texts.box.deleteTitleShared[this.props.language] : this.props.texts.box.deleteTitle[this.props.language]}
                    />
                </div>
                {this.props.openTodaysCards > 0 && <span className="badge">{this.props.openTodaysCards}</span>}
            </a>
        );
    }
}



