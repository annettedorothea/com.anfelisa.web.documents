import {mergeState, deepMergeState} from "../../app/App";

export default class LoginView {

	static render() {
        mergeState({
            route: "login",
            data : {
                username: "",
                saveInLocalStorage: false
            }
        });
	};

	static usernameChanged(eventData) {
        deepMergeState({
            data : {
                username: eventData.username
            }
        });
    }
	
	static toggleSaveInLocalStorage(eventData) {
        deepMergeState({
            data : {
                saveInLocalStorage: eventData.saveInLocalStorage
            }
        });
    }

}

/*                    S.D.G.                    */
