import React from "react";
import RevokeUserAccessClickAction from "../../author/actions/RevokeUserAccessClickAction";

export default class UserAccessItem extends React.Component {

    constructor(props) {
        super(props);
        this.onDelete = this.onDelete.bind(this);
    }

    onDelete() {
        new RevokeUserAccessClickAction({userId: this.props.userId}).apply();
    }

    render() {
        return (
            <li>
                {this.props.canRevoke === true && <button onClick={this.onDelete}><i className="fas fa-times"/></button>}
                {this.props.username}
            </li>
        );
    }
}
