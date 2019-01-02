import React from 'react';
import RouteAction from "../common/actions/RouteAction";
import ForgotPasswordAction from "../password/actions/ForgotPasswordAction";
import UsernameChangedAction from "../password/actions/UsernameChangedAction";
import AppUtils from "../app/AppUtils";

export default class ForgotPassword extends React.Component {

    constructor(props) {
        super(props);
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onUsernameChange(event) {
        const username = event.target.value;
        new UsernameChangedAction(username).apply();
    }

    onSubmit() {
        new ForgotPasswordAction().apply();
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
                            onChange={this.onUsernameChange}
                            autoComplete="off"
                            value={this.props.data.username}
                        />
                    </div>
                    <div className="moreMarginLine hCenter">
                        <button onClick={this.onSubmit}
                                disabled={this.props.data.username.length === 0}>
                            {this.props.texts.forgotPassword.submit[this.props.language]}
                        </button>
                        <button
                            onClick={() => new RouteAction("#").apply()}>{this.props.texts.forgotPassword.cancel[this.props.language]}</button>
                    </div>
                </div>
            </div>
        );
    }
}

