import React from 'react';
import CryptoJS from "crypto-js";
import RouteAction from "../common/actions/RouteAction";
import LoginAction from "../common/actions/LoginAction";

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onLogin = this.onLogin.bind(this);
    }

    onUsernameChange(event) {
        const username = event.target.value;
        this.setState({username});
    }

    onPasswordChange(event) {
        const password = CryptoJS.MD5(event.target.value).toString();
        this.setState({password});
    }

    onLogin() {
        const data = {
            username: this.state.username,
            password: this.state.password
        };
        new LoginAction(data).apply();
    }

    render() {
        return (
            <div>
                <h1>{this.props.texts.login.title}</h1>
                <div>
                    <div>
                        <label>{this.props.texts.login.username}</label>
                        <input
                            type={"text"}
                            placeholder={this.props.texts.login.username}
                            onChange={this.onUsernameChange}
                        />
                    </div>
                    <div>
                        <label>{this.props.texts.login.password}</label>
                        <input
                            type={"password"}
                            placeholder={this.props.texts.login.username}
                            onChange={this.onPasswordChange}
                        />
                    </div>
                    <div>
                        <button onClick={this.onLogin}>{this.props.texts.login.signin}</button>
                    </div>
                    <div>
                        <a onClick={() => new RouteAction({hash: "#registration"}).apply()}>{this.props.texts.login.registration}</a>
                    </div>
                    <div>
                        <a onClick={() => new RouteAction({hash: "#forgotpassword"}).apply()}>{this.props.texts.login.forgotPassword}</a>
                    </div>
                </div>
            </div>
        );
    }
}

