import Action from "../../ace/Action";
import OpenForgotPasswordCommand from "../../../src/profile/commands/OpenForgotPasswordCommand";

export default class AbstractOpenForgotPasswordAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'profile.OpenForgotPasswordAction', false);
    }

	getCommand() {
			return new OpenForgotPasswordCommand(this.actionData);
	}

	
    preUpdateUI() {
    }

    postUpdateUI() {
    }

}

/*       S.D.G.       */
