import Action from "../../ace/Action";
import SubmitNewPasswordCommand from "../../../src/profile/commands/SubmitNewPasswordCommand";

export default class AbstractSubmitNewPasswordAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'profile.SubmitNewPasswordAction', false);
    }

	getCommand() {
			return new SubmitNewPasswordCommand(this.actionData);
	}

	
    preUpdateUI() {
    }

    postUpdateUI() {
    }

}

/*       S.D.G.       */
