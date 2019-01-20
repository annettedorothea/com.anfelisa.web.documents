import React from 'react';
import Login from "./Login";
import Registration from "./Registration";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";

export default class AnonymousContainer extends React.Component {

    render() {
        switch (this.props.view) {
            case "registration":
                return <Registration
                    {...this.props.data}
                    texts={this.props.texts}
                    language={this.props.language}
                />;
            case "forgot-password":
                return <ForgotPassword
                    {...this.props.data}
                    texts={this.props.texts}
                    language={this.props.language}
                />;
            case "reset-password":
                return <ResetPassword
                    {...this.props.data}
                    texts={this.props.texts}
                    language={this.props.language}
                />;
            case "login":
                return <Login
                    {...this.props.data}
                    texts={this.props.texts}
                    language={this.props.language}
                />;
        }

        return (
            <div/>
        );
    }
}

