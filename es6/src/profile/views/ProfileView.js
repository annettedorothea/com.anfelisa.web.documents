import {mergeState, deepMergeState} from "../../app/App";

export default class ProfileView {
	static render(eventData) {
        mergeState({
            route: "profile",
            data : eventData
        });
	};

    static displayDeleteUserDialog() {
        deepMergeState({
            data : {
                showDeleteUserDialog: true
            }
        });
    };

    static hideDeleteUserDialog() {
        deepMergeState({
            data : {
                showDeleteUserDialog: false
            }
        });
    };

}

/*                    S.D.G.                    */
