import * as App from "../../app/App";

export default class UserListView {
	static render(eventData) {
        App.mergeState({
            route: "user-list",
            data : eventData
        });
	};
	
}

/*                    S.D.G.                    */
