import React from 'react';
import Login from "./Login";
import Registration from "./Registration";
import Dashboard from "./Dashboard";
import Logout from "./Logout";

export default class Container extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                {this.state.error && <label>{this.state.texts.errors[this.state.error.errorKey]}</label> }
                {this.state.username && <Logout {...this.state} /> }
                <div>
                    {this.state.route === "login" && <Login {...this.state} />}
                    {this.state.route === "registration" && <Registration {...this.state} />}
                    {this.state.route === "dashboard" && <Dashboard {...this.state} />}
                </div>
            </div>
        );
    }
}

