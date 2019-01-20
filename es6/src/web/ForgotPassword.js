import React from 'react';
import {forgotPassword, usernameForgotPasswordChanged} from "../../gen/password/ActionFunctions";
import {route} from "../../gen/common/ActionFunctions";

export default class ForgotPassword extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="center">
                <div className="form">
                    <h1>{this.props.texts.forgotPassword.title[this.props.language]}</h1>
                    <div className="line">
                        <label>{this.props.texts.forgotPassword.username[this.props.language]}</label>
                        <input
                            type={"text"}
                            onChange={(event) => usernameForgotPasswordChanged(event.target.value)}
                            autoComplete="off"
                            value={this.props.username}
                        />
                    </div>
                    <div className="moreMarginLine hCenter">
                        <button onClick={() => forgotPassword()}
                                disabled={this.props.username.length === 0}>
                            {this.props.texts.forgotPassword.submit[this.props.language]}
                        </button>
                        <button
                            onClick={() => route("#")}>{this.props.texts.forgotPassword.cancel[this.props.language]}</button>
                    </div>
                </div>
            </div>
        );
    }
}

