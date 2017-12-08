import Action from "../../ace/Action";
import SubmitForgotPasswordRequestCommand from "../../../src/profile/commands/SubmitForgotPasswordRequestCommand";

export default class AbstractSubmitForgotPasswordRequestAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'profile.SubmitForgotPasswordRequestAction', false);
    }

	getCommand() {
			return new SubmitForgotPasswordRequestCommand(this.actionData);
	}

	
    preUpdateUI() {
    }

    postUpdateUI() {
    }

}

/*       S.D.G.       */
