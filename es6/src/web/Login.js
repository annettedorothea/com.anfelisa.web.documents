import React from 'react';
import CryptoJS from "crypto-js";
import {route} from "../../gen/common/ActionFunctions";
import {login, toggleSaveInLocalStorage, usernameChanged} from "../../gen/login/ActionFunctions";
export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            password: ""
        };
        this.onPasswordChange = this.onPasswordChange.bind(this);
    }

    onPasswordChange(event) {
        const password = CryptoJS.MD5(event.target.value).toString();
        this.setState({password});
    }

    render() {
        return (
            <div className="center">
                <form className="form">
                    <h1>{this.props.texts.login.title[this.props.language]}</h1>
                    <div className="line">
                        <label>{this.props.texts.login.username[this.props.language]}</label>
                        <input
                            type={"text"}
                            onChange={(event) => usernameChanged(event.target.value)}
                            value={this.props.username}
                        />
                        <a onClick={() => route("#registration")}>{this.props.texts.login.registration[this.props.language]}</a>
                    </div>
                    <div className="line">
                        <label>{this.props.texts.login.password[this.props.language]}</label>
                        <input
                            type={"password"}
                            onChange={this.onPasswordChange}
                        />
                        <a onClick={() => route("#forgotpassword")}>{this.props.texts.login.forgotPassword[this.props.language]}</a>
                    </div>
                    <div className="line">
                        <input
                            id="saveInLocalStorage"
                            type={"checkbox"}
                            onChange={() => toggleSaveInLocalStorage()}
                            checked={this.props.saveInLocalStorage}
                        />
                        <label htmlFor="saveInLocalStorage">
                            {this.props.texts.login.saveInLocalStorage[this.props.language]}
                        </label>
                        <div
                            className="small-font">{this.props.texts.login.saveInLocalStorageHint[this.props.language]}</div>
                    </div>
                    <div className="moreMarginLine hCenter">
                        <button className="primary"
                                onClick={() => login(this.state.password)}>{this.props.texts.login.signin[this.props.language]}</button>
                    </div>
                </form>
            </div>
        );
    }
}

