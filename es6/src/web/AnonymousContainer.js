import React from 'react';
import Login from "./Login";
import Registration from "./Registration";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import PrivacyPolicy from "./PrivacyPolicy";

export default class AnonymousContainer extends React.Component {

    render() {
        if (this.props.mainView) {
            if (this.props.mainView.isRegistrationView) {
                return <Registration
                    {...this.props.mainView}
                    texts={this.props.texts}
                    language={this.props.language}
                />;
            }
            if (this.props.mainView.isForgotPasswordView) {
                return <ForgotPassword
                    {...this.props.mainView}
                    texts={this.props.texts}
                    language={this.props.language}
                />;
            }
            if (this.props.mainView.isResetPasswordView) {
                return <ResetPassword
                    {...this.props.mainView}
                    texts={this.props.texts}
                    language={this.props.language}
                />;
            }
            if (this.props.mainView.isLoginView) {
                return <Login
                    {...this.props.mainView}
                    texts={this.props.texts}
                    language={this.props.language}
                />;
            }
            if (this.props.mainView.isPrivacyPolicyView) {
                return <PrivacyPolicy
                    texts={this.props.texts}
                    language={this.props.language}
                />;
            }
        }
        return (
            <div/>
        );
    }
}

