import React from 'react';
import RouteAction from "../common/actions/RouteAction";

export default class Dashboard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.texts.dashboard.title}</h1>
                <button onClick={() => new RouteAction({hash: "#profile"}).apply()}>{this.props.texts.dashboard.profile}</button>
            </div>
        );
    }
}

