import * as App from "../../app/App";

export default class UserListView {
	static render(eventData) {
        App.mergeState({
            route: "user-list",
            data : eventData
        });
	};
	
	static displayDeleteUserDialog(eventData) {
        App.deepMergeState({
            data : {
                showDeleteUserDialog: true,
                usernameToBeDeleted: eventData.usernameToBeDeleted
            }
        });
	};

	static hideDeleteUserDialog() {
        App.deepMergeState({
            data : {
                showDeleteUserDialog: false,
                usernameToBeDeleted: undefined
            }
        });
	};

}

/*                    S.D.G.                    */
