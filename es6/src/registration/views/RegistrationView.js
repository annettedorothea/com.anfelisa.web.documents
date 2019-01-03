import {mergeState, deepMergeState} from "../../app/App";

export default class RegistrationView {

	static render() {
        mergeState({
            route: "registration",
            data: {
                displayUsernameSpinner: false,
                usernameAvailable: undefined,
                username: "",
                email: "",
                emailInvalid: false,
                passwordMismatch: false
            }
        });
	};
	
	static usernameAvailable(eventData) {
        deepMergeState({
            data : {
                usernameAvailable: true
            }
        });
	};

	static usernameNotAvailable() {
        deepMergeState({
            data : {
                usernameAvailable: false
            }
        });
	};

    static displayUsernameSpinner() {
        deepMergeState({
            data : {
                displayUsernameSpinner: true
            }
        });
    };

    static hideUsernameSpinner() {
        deepMergeState({
            data : {
                displayUsernameSpinner: false
            }
        });
    };

    static emailChanged(eventData) {
        deepMergeState({
            data : {
                email: eventData.email
            }
        });
    }

    static emailValid() {
        deepMergeState({
            data : {
                emailInvalid: false
            }
        });
    }

    static emailInvalid() {
        deepMergeState({
            data : {
                emailInvalid: true
            }
        });
    }

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
