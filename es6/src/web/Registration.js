import React from 'react';
import CryptoJS from "crypto-js";
import {emailChanged, passwordChanged, registerUser, usernameChanged} from "../../gen/registration/ActionFunctions";
import {route} from "../../gen/common/ActionFunctions";

export default class Registration extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            password: "",
            passwordRepetition: ""
        };
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onPasswordRepetitionChange = this.onPasswordRepetitionChange.bind(this);
        this.onRegister = this.onRegister.bind(this);
    }

    onPasswordChange(event) {
        const password = CryptoJS.MD5(event.target.value).toString();
        this.setState(
            {
                password
            }
        );
        passwordChanged(password, this.state.passwordRepetition);
    }

    onPasswordRepetitionChange(event) {
        const passwordRepetition = CryptoJS.MD5(event.target.value).toString();
        this.setState({passwordRepetition});
        passwordChanged(this.state.password, passwordRepetition);
    }

    onRegister() {
        registerUser(this.state.password);
    }

    render() {
        return (
            <div className="center">
                <div className="form">
                    <h1>{this.props.texts.registration.title[this.props.language]}</h1>
                    <div className="line">
                        <label>{this.props.texts.registration.username[this.props.language]}</label>
                        <div className="inputContainer">
                            <input
                                type={"text"}
                                onChange={(e) => usernameChanged(e.target.value)}
                                autoComplete="off"
                                value={this.props.username}
                            />
                            {this.props.displayUsernameSpinner === true &&
                            <i className="fas fa-cog fa-spin inside"/>}
                            {this.props.available === true && this.props.username.length > 0 &&
                            <i className="fas fa-check outside success"/>}
                            {this.props.available === false && this.props.username.length > 0 &&
                            <i className="fas fa-times outside error"/>}
                        </div>
                    </div>
                    <div className="line">
                        <label>{this.props.texts.registration.password[this.props.language]}</label>
                        <div className="inputContainer">
                            <input
                                type={"password"}
                                onChange={this.onPasswordChange}
                                autoComplete="off"
                            />
                        </div>
                    </div>
                    <div className="line">
                        <label>{this.props.texts.registration.passwordRepetition[this.props.language]}</label>
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
                    <div className="line">
                        <label>{this.props.texts.registration.email[this.props.language]}</label>
                        <div className="inputContainer">
                            <input
                                type={"text"}
                                onChange={(e) => emailChanged(e.target.value)}
                                autoComplete="off"
                                value={this.props.email}
                            />
                            {this.props.emailInvalid === true && this.props.email.length > 0 &&
                            <i className="fas fa-times outside error"/>}
                        </div>
                    </div>
                    <div className="moreMarginLine hCenter">
                        <button onClick={this.onRegister}
                                disabled={this.props.usernameAvailable === false ||
                                this.props.username.length === 0 ||
                                this.props.email.length === 0 ||
                                this.state.password.length === 0 ||
                                this.props.passwordMismatch === true
                                }>
                            {this.props.texts.registration.register[this.props.language]}
                        </button>
                        <button
                            onClick={() => route("#")}>{this.props.texts.registration.cancel[this.props.language]}</button>
                    </div>
                    <div className="line">
                        <div
                            className="small-font">{this.props.texts.registration.terms[this.props.language]}</div>
                    </div>
                </div>
            </div>
        );
    }
}

