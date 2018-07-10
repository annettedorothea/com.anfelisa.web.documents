import React from 'react';
import CryptoJS from "crypto-js";
import RouteAction from "../common/actions/RouteAction";
import CheckUsernameAction from "../common/actions/CheckUsernameAction"
import CreateUserAction from "../common/actions/RegisterUserAction";

export default class Registration extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordRepetition: '',
            passwordMismatch: false,
            emailInvalid: false
        };
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onPasswordRepetitionChange = this.onPasswordRepetitionChange.bind(this);
        this.onRegister = this.onRegister.bind(this);
    }

    onUsernameChange(event) {
        const username = event.target.value;
        this.setState({username});
        new CheckUsernameAction({username}).apply();
    }

    onEmailChange(event) {
        const email = event.target.value;
        let emailInvalid = false;
        if( /(.+)@(.+){2,}\.(.+){2,}/.test(email) === false){
            emailInvalid = true;
        } else {
        }
        this.setState({email, emailInvalid});
    }

    onPasswordChange(event) {
        const password = CryptoJS.MD5(event.target.value).toString();
        this.setState(
            {
                password,
                passwordMismatch: password !== this.state.passwordRepetition
            }
        );
    }

    onPasswordRepetitionChange(event) {
        const passwordRepetition = CryptoJS.MD5(event.target.value).toString();
        this.setState({passwordRepetition});
        this.setState(
            {
                passwordRepetition,
                passwordMismatch: passwordRepetition !== this.state.password
            }
        );
    }

    onRegister() {
        const data = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            language: this.props.language
        };
        new CreateUserAction(data).apply();
    }

    render() {
        return (
            <div>
                <h1>{this.props.texts.registration.title[this.props.language]}</h1>
                <div>
                    <div>
                        <label>{this.props.texts.registration.username[this.props.language]}</label>
                        <input
                            type={"text"}
                            placeholder={this.props.texts.registration.username[this.props.language]}
                            onChange={this.onUsernameChange}
                            autoComplete="off"
                            value={this.state.username}
                        />
                        {this.props.data.displayUsernameSpinner === true &&
                        <label>{this.props.texts.registration.checkingUsername[this.props.language]}</label>}
                        {this.props.data.usernameAvailable === true && this.state.username.length > 0 &&
                        <label>{this.props.texts.registration.usernameAvailable[this.props.language]}</label>}
                        {this.props.data.usernameAvailable === false && this.state.username.length > 0 &&
                        <label>{this.props.texts.registration.usernameNotAvailable[this.props.language]}</label>}
                    </div>
                    <div>
                        <label>{this.props.texts.registration.password[this.props.language]}</label>
                        <input
                            type={"password"}
                            placeholder={this.props.texts.registration.password[this.props.language]}
                            onChange={this.onPasswordChange}
                            autoComplete="off"
                        />
                    </div>
                    <div>
                        <label>{this.props.texts.registration.passwordRepetition[this.props.language]}</label>
                        <input
                            type={"password"}
                            placeholder={this.props.texts.registration.passwordRepetition[this.props.language]}
                            onChange={this.onPasswordRepetitionChange}
                            autoComplete="off"
                        />
                        {this.state.passwordMismatch === true &&
                        <label>{this.props.texts.registration.passwordMismatch[this.props.language]}</label>}
                    </div>
                    <div>
                        <label>{this.props.texts.registration.email[this.props.language]}</label>
                        <input
                            type={"text"}
                            placeholder={this.props.texts.registration.email[this.props.language]}
                            onChange={this.onEmailChange}
                            autoComplete="off"
                            value={this.state.email}
                        />
                        {this.state.emailInvalid === true &&
                        <label>{this.props.texts.registration.emailInvalid[this.props.language]}</label>}
                    </div>
                    <div>
                        <button onClick={this.onRegister}
                                disabled={this.props.data.usernameAvailable === false ||
                                this.state.username.length === 0 ||
                                this.state.email.length === 0 ||
                                this.state.password.length === 0 ||
                                this.state.passwordMismatch === true
                                }>
                            {this.props.texts.registration.register[this.props.language]}
                        </button>
                        <button
                            onClick={() => new RouteAction({hash: "#"}).apply()}>{this.props.texts.registration.cancel[this.props.language]}</button>
                    </div>
                </div>
            </div>
        );
    }
}

