import * as App from "../../app/App";

export default class ProfileView {
	static render(eventData) {
        App.container.setState({
            route: "profile",
            data : eventData
        });
	};
	
}

/*                    S.D.G.                    */
