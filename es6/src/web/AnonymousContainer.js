import React from 'react';
import Login from "./Login";
import Registration from "./Registration";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";

export default class AnonymousContainer extends React.Component {

    render() {
        let content = "";
        switch (this.props.route) {
            case "registration":
                content = <Registration {...this.props} />;
                break;
            case "forgot-password":
                content = <ForgotPassword {...this.props} />;
                break;
            case "reset-password":
                content = <ResetPassword {...this.props} />;
                break;
            case "login":
                content = <Login {...this.props} />;
        }

        return (
            <div>
                <div>
                    {content}
                </div>
            </div>
        );
    }
}

