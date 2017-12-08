import Action from "../../ace/Action";
import ValidatePasswordCommand from "../../../src/profile/commands/ValidatePasswordCommand";

export default class AbstractValidatePasswordAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'profile.ValidatePasswordAction', false);
    }

	getCommand() {
			return new ValidatePasswordCommand(this.actionData);
	}

	
    preUpdateUI() {
    }

    postUpdateUI() {
    }

}

/*       S.D.G.       */
