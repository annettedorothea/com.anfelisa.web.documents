import Action from "../../ace/Action";
import ConfirmEmailCommand from "../../../src/profile/commands/ConfirmEmailCommand";

export default class AbstractConfirmEmailAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'profile.ConfirmEmailAction', false);
    }

	getCommand() {
		return new ConfirmEmailCommand(this.actionData);
	}

	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
