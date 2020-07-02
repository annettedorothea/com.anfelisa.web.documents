import React from 'react';
import Login from "./Login";
import Registration from "./Registration";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";

export default class AnonymousContainer extends React.Component {

    render() {
        if (this.props.registrationView) {
            return <Registration
                {...this.props.registrationView}
                texts={this.props.texts}
                language={this.props.language}
            />;
        }
        if (this.props.forgotPasswordView) {
            return <ForgotPassword
                {...this.props.forgotPasswordView}
                texts={this.props.texts}
                language={this.props.language}
            />;
        }
        if (this.props.resetPasswordView) {
            return <ResetPassword
                {...this.props.resetPasswordView}
                texts={this.props.texts}
                language={this.props.language}
            />;
        }
        if (this.props.loginView) {
            return <Login
                {...this.props.loginView}
                texts={this.props.texts}
                language={this.props.language}
            />;
        }
        return (
            <div/>
        );
    }
}

