import React from 'react';

export default class Progress extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const open = Math.round(this.props.openTodaysCards / this.props.allTodaysCards * 100);
        const done = 100 - open;
        return <div className="progress">
            <div className={`${done === 100 ? 'all-done' : 'done'}`} style={{width: `${done}%`}}/>
            <div className={`${open === 100 ? 'all-open' : 'open'}`} style={{width: `${open}%`}}/>
        </div>
    }
}

