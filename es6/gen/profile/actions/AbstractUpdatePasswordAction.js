import Action from "../../ace/Action";
import UpdatePasswordCommand from "../../../src/profile/commands/UpdatePasswordCommand";

export default class AbstractUpdatePasswordAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'profile.UpdatePasswordAction', false);
    }

	getCommand() {
		return new UpdatePasswordCommand(this.actionData);
	}

	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
