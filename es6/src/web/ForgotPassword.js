import React from 'react';
import RouteAction from "../common/actions/RouteAction";
import ForgotPasswordAction from "../common/actions/ForgotPasswordAction";

export default class ForgotPassword extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: ''
        };
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onUsernameChange(event) {
        const username = event.target.value;
        this.setState({username});
    }

    onSubmit() {
        const data = {
            username: this.state.username,
            language: this.props.language
        };
        new ForgotPasswordAction(data).apply();
    }

    render() {
        return (
            <div>
                <h1>{this.props.texts.forgotPassword.title}</h1>
                <div>
                    <div>
                        <label>{this.props.texts.forgotPassword.username}</label>
                        <input
                            type={"text"}
                            placeholder={this.props.texts.forgotPassword.username}
                            onChange={this.onUsernameChange}
                            autoComplete="off"
                            value={this.state.username}
                        />
                    </div>
                    <div>
                        <button onClick={this.onSubmit}
                                disabled={this.state.username.length === 0}>
                            {this.props.texts.forgotPassword.submit}
                        </button>
                        <button
                            onClick={() => new RouteAction({hash: "#"}).apply()}>{this.props.texts.forgotPassword.cancel}</button>
                    </div>
                </div>
            </div>
        );
    }
}

