import * as App from "../../app/App";

export default class ProfileView {
	static render(eventData) {
	    console.log("eventData", eventData);
        App.container.setState({
            route: "profile",
            data : eventData
        });
	};
	
}

/*                    S.D.G.                    */
