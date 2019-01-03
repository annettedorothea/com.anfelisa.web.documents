import {mergeState, deepMergeState} from "../../app/App";

export default class UserListView {
	static render(eventData) {
        mergeState({
            route: "user-list",
            data : eventData
        });
	};
	
	static displayDeleteUserDialog(eventData) {
        deepMergeState({
            data : {
                showDeleteUserDialog: true,
                usernameToBeDeleted: eventData.usernameToBeDeleted
            }
        });
	};

	static hideDeleteUserDialog() {
        deepMergeState({
            data : {
                showDeleteUserDialog: false,
                usernameToBeDeleted: undefined
            }
        });
	};

}

/*                    S.D.G.                    */
