import React from 'react';
import {route} from "../../gen/common/ActionFunctions"

export default class AuthorDashboard extends React.Component {

    render() {
        return (
            <button className="primary bottomMargin" onClick={() => route("#categories")}>
                {this.props.texts.authorDashboard.categories[this.props.language]}
            </button>
        );
    }
}

