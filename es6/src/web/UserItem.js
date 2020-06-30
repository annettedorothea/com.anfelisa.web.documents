import React from 'react';

export default class UserItem extends React.Component {

    render() {
        return (
            <tr>
                <td>{this.props.username}</td>
                <td><RoleSelect {...this.props} /></td>
                <td>{this.props.email}</td>
                <td>{this.props.emailConfirmed === true ? <i className="fas fa-check success"/> :
                    <i className="fas fa-times error"/>}</td>
                <td>
                    <button
                        disabled={this.props.username === this.props.myUsername}
                        onClick={() => this.props.onDeleteClick(this.props.username)}
                        className="danger">
                        <i className="fas fa-times"/>
                    </button>
                </td>
            </tr>
        );
    }
}