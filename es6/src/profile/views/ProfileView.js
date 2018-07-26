import * as App from "../../app/App";

export default class ProfileView {
	static render(eventData) {
        App.mergeState({
            route: "profile",
            data : eventData
        });
	};
	
}

/*                    S.D.G.                    */
