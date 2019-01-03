import {mergeState, deepMergeState} from "../../app/App";

export default class ForgotPasswordView {
    static render() {
        mergeState({
            route: "forgot-password",
            data: {
                username: ""
            }
        });
    };

    static usernameChanged(eventData) {
        deepMergeState({
            data : {
                username: eventData.username
            }
        });
    };
}

/*                    S.D.G.                    */
