import React from 'react';
import CryptoJS from "crypto-js";
import RouteAction from "../common/actions/RouteAction";
import CheckUsernameAction from "../common/actions/CheckUsernameAction"
import CreateUserAction from "../common/actions/CreateUserAction";

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
                <h1>{this.props.texts.registration.title}</h1>
                <div>
                    <div>
                        <label>{this.props.texts.registration.username}</label>
                        <input
                            type={"text"}
                            placeholder={this.props.texts.registration.username}
                            onChange={this.onUsernameChange}
                            autoComplete="off"
                            value={this.state.username}
                        />
                        {this.props.data.displayUsernameSpinner === true &&
                        <label>{this.props.texts.registration.checkingUsername}</label>}
                        {this.props.data.usernameAvailable === true && this.state.username.length > 0 &&
                        <label>{this.props.texts.registration.usernameAvailable}</label>}
                        {this.props.data.usernameAvailable === false && this.state.username.length > 0 &&
                        <label>{this.props.texts.registration.usernameNotAvailable}</label>}
                    </div>
                    <div>
                        <label>{this.props.texts.registration.password}</label>
                        <input
                            type={"password"}
                            placeholder={this.props.texts.registration.password}
                            onChange={this.onPasswordChange}
                            autoComplete="off"
                        />
                    </div>
                    <div>
                        <label>{this.props.texts.registration.passwordRepetition}</label>
                        <input
                            type={"password"}
                            placeholder={this.props.texts.registration.passwordRepetition}
                            onChange={this.onPasswordRepetitionChange}
                            autoComplete="off"
                        />
                        {this.state.passwordMismatch === true &&
                        <label>{this.props.texts.registration.passwordMismatch}</label>}
                    </div>
                    <div>
                        <label>{this.props.texts.registration.email}</label>
                        <input
                            type={"text"}
                            placeholder={this.props.texts.registration.email}
                            onChange={this.onEmailChange}
                            autoComplete="off"
                            value={this.state.email}
                        />
                        {this.state.emailInvalid === true &&
                        <label>{this.props.texts.registration.emailInvalid}</label>}
                    </div>
                    <div>
                        <button onClick={this.onRegister}
                                disabled={this.props.data.usernameAvailable === false ||
                                this.state.username.length === 0 ||
                                this.state.email.length === 0 ||
                                this.state.password.length === 0 ||
                                this.state.passwordMismatch === true
                                }>
                            {this.props.texts.registration.register}
                        </button>
                        <button
                            onClick={() => new RouteAction({hash: "#"}).apply()}>{this.props.texts.registration.cancel}</button>
                    </div>
                </div>
            </div>
        );
    }
}

