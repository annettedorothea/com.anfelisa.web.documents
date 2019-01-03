import {mergeState, deepMergeState} from "../../app/App";

export default class ResetPasswordView {
	static render(eventData) {
        mergeState({
            route: "reset-password",
            data: {
                token: eventData.token,
                passwordMismatch: false
            }
        });
	};

    static passwordMismatch() {
        deepMergeState({
            data : {
                passwordMismatch: true
            }
        });
    }
    static passwordMatch() {
        deepMergeState({
            data : {
                passwordMismatch: false
            }
        });
    }
}

/*                    S.D.G.                    */
