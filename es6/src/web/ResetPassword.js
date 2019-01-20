import React from 'react';
import CryptoJS from "crypto-js";
import {route} from "../../gen/common/ActionFunctions";
import {passwordChanged, resetPassword} from "../../gen/password/ActionFunctions";

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
        passwordChanged(password, this.state.passwordRepetition);
    }

    onPasswordRepetitionChange(event) {
        const passwordRepetition = CryptoJS.MD5(event.target.value).toString();
        this.setState({
            passwordRepetition
        });
        passwordChanged(this.state.password, passwordRepetition);
    }

    onSubmit() {
        resetPassword(this.state.password);
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
                            {this.props.passwordMismatch === true &&
                            <i className="fas fa-times outside error"/>}
                        </div>
                    </div>
                    <div className="moreMarginLine hCenter">
                        <button onClick={this.onSubmit}
                                disabled={this.state.password.length === 0 ||
                                this.props.passwordMismatch === true
                                }>
                            {this.props.texts.resetPassword.submit[this.props.language]}
                        </button>
                        <button
                            onClick={() => route("#")}>{this.props.texts.resetPassword.cancel[this.props.language]}</button>
                    </div>
                </div>
            </div>
        );
    }
}

