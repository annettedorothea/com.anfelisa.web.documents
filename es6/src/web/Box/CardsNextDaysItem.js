import React from 'react';

export default class CardsNextDaysItem extends React.Component {

    render() {
        const toDoFactor = this.props.count * 1.0 / this.props.maxCardsPerDay;
        return <div className={`${this.props.rounded} cards-next-days-item`} style={{background: `rgba(192, 192, 192, ${toDoFactor})`}}>
            {this.props.count}
        </div>
    }
}

