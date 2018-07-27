import * as App from "../../app/App";

export default class ResetPasswordView {
	static render(eventData) {
        App.mergeState({
            route: "reset-password",
            data: {
                token: eventData.token,
                passwordMismatch: false
            }
        });
	};

    static passwordMismatch() {
        App.deepMergeState({
            data : {
                passwordMismatch: true
            }
        });
    }
    static passwordMatch() {
        App.deepMergeState({
            data : {
                passwordMismatch: false
            }
        });
    }
}

/*                    S.D.G.                    */
