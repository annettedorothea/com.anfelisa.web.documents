import React from 'react';
import Login from "./Login";
import Registration from "./Registration";

export default class AnonymousContainer extends React.Component {

    render() {
        let content;
        switch (this.props.route) {
            case "registration":
                content = <Registration {...this.props} />;
                break;
            case "login":
            default:
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

