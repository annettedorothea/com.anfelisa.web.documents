import React from 'react';
import CardsNextDaysItem from "./CardsNextDaysItem";
import {deleteBoxClick} from "../../../gen/box/ActionFunctions";
import {route} from "../../../gen/common/ActionFunctions";

export default class CardsNextDays extends React.Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        e.stopPropagation();
        route(`#box/active-cards/${this.props.boxId}`);
    }

    render() {
        if (this.props.countsPerDayNextWeek && this.props.countsPerDayNextWeek.length === 7 && this.props.maxCardsPerDay && this.props.maxCardsPerDay > 0) {
            let index = 0;
            let items = this.props.countsPerDayNextWeek.map((count) => {
                index++;
                let date = new Date();
                date.setDate(date.getDate() + index);
                date.setHours(0,0,0,0);
                const day = date.getDay();
                return <CardsNextDaysItem
                    key={day}
                    maxCardsPerDay={this.props.maxCardsPerDay}
                    count={count}
                    day={day}
                    texts={this.props.texts}
                    language={this.props.language}
                    rounded={index === 1 ? "rounded-left" : index === 7 ? "rounded-right" : ""}
                />
            });
            return <div className="cards-next-days" onClick={(e) => this.onClick(e)}>
                {items}
            </div>
        } else {
            return "";
        }
    }
}

