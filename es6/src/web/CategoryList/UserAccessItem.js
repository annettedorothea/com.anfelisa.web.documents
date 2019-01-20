import React from "react";
import {revokeUserAccess} from "../../../gen/category/ActionFunctions";

export default class UserAccessItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>
                {this.props.canRevoke === true &&
                <button
                    className="smaller"
                    onClick={() => revokeUserAccess(this.props.userId)}>
                    <i className="fas fa-times"/></button>}
                {this.props.username}
            </li>
        );
    }
}

