import React from 'react';
import DeleteBoxClickAction from "../../box/actions/DeleteBoxClickAction";
import RouteAction from "../../common/actions/RouteAction";
import BoxInfo from "./BoxInfo";
import Statistics from "./Statistics";

export default class BoxItem extends React.Component {

    constructor(props) {
        super(props);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    onDeleteClick(e) {
        e.stopPropagation();
        new DeleteBoxClickAction({boxId: this.props.boxId}).apply();
    }

    render() {
        const count = this.props.todaysCards + this.props.reinforceCards;
        return (
            <a
                className="tile"
                onClick={() => new RouteAction(
                    {
                        hash: `#box/${this.props.boxId}`
                    }).apply()}>

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



