import React from 'react';
import RouteAction from "../common/actions/RouteAction";
import CryptoJS from "crypto-js";
import ResetPasswordAction from "../password/actions/ResetPasswordAction";
import PasswordChangedAction from "../password/actions/PasswordChangedAction";

export default class ResetPassword extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            password: '',
            passwordRepetition: ''
        };
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onPasswordRepetitionChange = this.onPasswordRepetitionChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onPasswordChange(event) {
        const password = CryptoJS.MD5(event.target.value).toString();
        this.setState({
            password
        });
        new PasswordChangedAction(password, this.state.passwordRepetition).apply();
    }

    onPasswordRepetitionChange(event) {
        const passwordRepetition = CryptoJS.MD5(event.target.value).toString();
        this.setState({
            passwordRepetition
        });
        new PasswordChangedAction(this.state.password, passwordRepetition).apply();
    }

    onSubmit() {
        new ResetPasswordAction(this.state.password, this.props.data.token).apply();
    }

    render() {
        return (
            <div className="center">
                <div className="form">
                    <h1>{this.props.texts.resetPassword.title[this.props.language]}</h1>
                    <div className="line">
                        <label>{this.props.texts.resetPassword.password[this.props.language]}</label>
                        <div className="inputContainer">
                            <input
                                type={"password"}
                                onChange={this.onPasswordChange}
                                autoComplete="off"
                            />
                        </div>
                    </div>
                    <div className="line">
                        <label>{this.props.texts.resetPassword.passwordRepetition[this.props.language]}</label>
                        <div className="inputContainer">
                            <input
                                type={"password"}
                                onChange={this.onPasswordRepetitionChange}
                                autoComplete="off"
                            />
                            {this.props.data.passwordMismatch === true &&
                            <i className="fas fa-times outside error"/>}
                        </div>
                    </div>
                    <div className="moreMarginLine hCenter">
                        <button onClick={this.onSubmit}
                                disabled={this.state.password.length === 0 ||
                                this.props.data.passwordMismatch === true
                                }>
                            {this.props.texts.resetPassword.submit[this.props.language]}
                        </button>
                        <button
                            onClick={() => new RouteAction("#").apply()}>{this.props.texts.resetPassword.cancel[this.props.language]}</button>
                    </div>
                </div>
            </div>
        );
    }
}

