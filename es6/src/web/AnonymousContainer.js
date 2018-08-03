import React from 'react';
import Login from "./Login";
import Registration from "./Registration";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";

export default class AnonymousContainer extends React.Component {

    render() {
        switch (this.props.route) {
            case "registration":
                return <Registration {...this.props} />;
            case "forgot-password":
                return <ForgotPassword {...this.props} />;
            case "reset-password":
                return <ResetPassword {...this.props} />;
            case "login":
                return <Login {...this.props} />;
        }

        return (
            <div/>
        );
    }
}

