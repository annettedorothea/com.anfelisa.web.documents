import React from 'react';
import Card from "./Card";
import RouteAction from "../../common/actions/RouteAction";

export default class QueryCards extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const open = Math.round(this.props.openTodaysCards / this.props.allTodaysCards * 100);
        const done = 100 - open;
        if (open === 0) {
            return <div className="box">

                <h1>
                    <button
                        className="backButton"
                        onClick={() => new RouteAction("#dashboard").apply()}><i className="fa fa-arrow-left"/>
                    </button>
                </h1>

                <div className="progress">
                    <div className={`${done === 100 ? 'all-done' : 'done'}`} style={{width: `${done}%`}}/>
                    <div className={`${open === 100 ? 'all-open' : 'open'}`} style={{width: `${open}%`}}/>
                </div>

                <h2>{this.props.texts.queryCards.finished[this.props.language]}</h2>

            </div>
        }
        return (
            <div className="box">

                <h1>
                    <button
                        className="backButton"
                        onClick={() => new RouteAction("#dashboard").apply()}><i className="fa fa-arrow-left"/>
                    </button>
                </h1>

                <div className="progress">
                    <div className="done" style={{width: `${done}%`}}/>
                    <div className={`${open === 100 ? 'all-open' : 'open'}`} style={{width: `${open}%`}}/>
                </div>
                

                <Card {...this.props}/>

            </div>
        );
    }
}

