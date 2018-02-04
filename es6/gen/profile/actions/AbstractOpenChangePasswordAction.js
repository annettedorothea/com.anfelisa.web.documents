import Action from "../../ace/Action";
import OpenChangePasswordCommand from "../../../src/profile/commands/OpenChangePasswordCommand";

export default class AbstractOpenChangePasswordAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'profile.OpenChangePasswordAction', false);
    }

	getCommand() {
		return new OpenChangePasswordCommand(this.actionData);
	}

	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
