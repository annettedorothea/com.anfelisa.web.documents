import * as App from "../../app/App";

export default class LoginView {

	static render() {
        App.mergeState({
            route: "login",
            data : {
                username: "",
                saveInLocalStorage: false
            }
        });
	};

	static usernameChanged(eventData) {
        App.deepMergeState({
            data : {
                username: eventData.username
            }
        });
    }
	
	static toggleSaveInLocalStorage(eventData) {
        App.deepMergeState({
            data : {
                saveInLocalStorage: eventData.saveInLocalStorage
            }
        });
    }

}

/*                    S.D.G.                    */
