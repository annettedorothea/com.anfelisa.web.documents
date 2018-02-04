import Action from "../../ace/Action";
import OpenRegistrationCommand from "../../../src/profile/commands/OpenRegistrationCommand";

export default class AbstractOpenRegistrationAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'profile.OpenRegistrationAction', false);
    }

	getCommand() {
		return new OpenRegistrationCommand(this.actionData);
	}

	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
