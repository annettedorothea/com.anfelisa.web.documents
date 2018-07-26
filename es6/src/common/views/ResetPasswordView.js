import * as App from "../../app/App";

export default class ResetPasswordView {
	static render(eventData) {
        App.mergeState({
            route: "reset-password",
            data: {
                token: eventData.token
            }
        });
	};
	
}

/*                    S.D.G.                    */
