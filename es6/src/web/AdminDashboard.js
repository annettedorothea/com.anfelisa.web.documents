import React from 'react';
import {route} from "../../gen/common/ActionFunctions";

export default class AdminDashboard extends React.Component {

    render() {
        return (
            <button className="bottomMargin" onClick={() => route("#users")}>
                {this.props.texts.adminDashboard.users[this.props.language]}
            </button>
        );
    }
}

