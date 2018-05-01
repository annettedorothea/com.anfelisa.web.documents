import * as App from "../../app/App";

export default class UserListView {
	static render(eventData) {
        App.container.setState({
            route: "user-list",
            data : eventData
        });
	};
	
}

/*                    S.D.G.                    */
