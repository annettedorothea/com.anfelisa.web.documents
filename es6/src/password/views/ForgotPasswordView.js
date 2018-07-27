import * as App from "../../app/App";

export default class ForgotPasswordView {
    static render() {
        App.mergeState({
            route: "forgot-password",
            data: {
                username: ""
            }
        });
    };

    static usernameChanged(eventData) {
        App.deepMergeState({
            data : {
                username: eventData.username
            }
        });
    };
}

/*                    S.D.G.                    */
