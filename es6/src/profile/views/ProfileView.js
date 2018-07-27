import * as App from "../../app/App";

export default class ProfileView {
	static render(eventData) {
        App.mergeState({
            route: "profile",
            data : eventData.data
        });
	};

    static displayDeleteUserDialog() {
        App.deepMergeState({
            data : {
                showDeleteUserDialog: true
            }
        });
    };

    static hideDeleteUserDialog() {
        App.deepMergeState({
            data : {
                showDeleteUserDialog: false
            }
        });
    };

}

/*                    S.D.G.                    */
