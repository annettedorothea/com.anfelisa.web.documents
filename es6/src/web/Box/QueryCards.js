import React from 'react';
import Card from "./Card";
import RouteAction from "../../common/actions/RouteAction";

export default class QueryCards extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const open = this.props.openTodaysCards / this.props.allTodaysCards * 100;
        const done = 100 - open;
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
                    <div className="open" style={{width: `${open}%`}}/>
                </div>
                

                <Card {...this.props}/>

            </div>
        );
    }
}

