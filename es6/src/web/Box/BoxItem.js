import React from 'react';
import RouteAction from "../../common/actions/RouteAction";
import Statistics from "./Statistics";
import {deleteBoxClick} from "../../../gen/box/ActionFunctions";

export default class BoxItem extends React.Component {

    constructor(props) {
        super(props);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    onDeleteClick(e) {
        e.stopPropagation();
        deleteBoxClick(this.props.boxId);
    }

    render() {
        const count = this.props.todaysCards + this.props.reinforceCards;
        return (
            <a
                className="tile"
                onClick={() => new RouteAction(`#box/${this.props.boxId}`).apply()}>

                <h2>{this.props.categoryName}</h2>

                <table>
                    <tbody>
                    <tr>
                        <td>{this.props.texts.box.todaysCards[this.props.language]}</td>
                        <td>{this.props.todaysCards}</td>
                    </tr>
                    <tr>
                        <td>{this.props.texts.box.reinforceCards[this.props.language]}</td>
                        <td>{this.props.reinforceCards}</td>
                    </tr>
                    {this.props.daysBehindSchedule !== undefined && this.props.daysBehindSchedule > 0 && <tr>
                        <td colSpan={2}>{this.props.daysBehindSchedule === 1 ?
                            this.props.texts.box.daysBehindScheduleMessageOne[this.props.language] :
                            this.props.texts.box.daysBehindScheduleMessage[this.props.language].replace("{0}", this.props.daysBehindSchedule)}</td>
                    </tr>}
                    </tbody>
                </table>

                <Statistics {...this.props}/>

                <div className="buttons">
                    <i className="fas fa-times fa-lg danger" onClick={(e) => this.onDeleteClick(e)}/>
                </div>
                {count > 0 && <span className="badge">{count}</span>}
            </a>
        );
    }
}



