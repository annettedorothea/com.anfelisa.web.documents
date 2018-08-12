import * as App from "../../app/App";

export default class RegistrationView {

	static render() {
        App.mergeState({
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
        App.deepMergeState({
            data : {
                usernameAvailable: true
            }
        });
	};

	static usernameNotAvailable() {
        App.deepMergeState({
            data : {
                usernameAvailable: false
            }
        });
	};

    static displayUsernameSpinner() {
        App.deepMergeState({
            data : {
                displayUsernameSpinner: true
            }
        });
    };

    static hideUsernameSpinner() {
        App.deepMergeState({
            data : {
                displayUsernameSpinner: false
            }
        });
    };

    static emailChanged(eventData) {
        App.deepMergeState({
            data : {
                email: eventData.email
            }
        });
    }

    static emailValid() {
        App.deepMergeState({
            data : {
                emailInvalid: false
            }
        });
    }

    static emailInvalid() {
        App.deepMergeState({
            data : {
                emailInvalid: true
            }
        });
    }

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
