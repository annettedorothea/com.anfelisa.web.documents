import Action from "../../ace/Action";
import SubmitRegistrationCommand from "../../../src/profile/commands/SubmitRegistrationCommand";

export default class AbstractSubmitRegistrationAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'profile.SubmitRegistrationAction', false);
    }

	getCommand() {
			return new SubmitRegistrationCommand(this.actionData);
	}

	
    preUpdateUI() {
    }

    postUpdateUI() {
    }

}

/*       S.D.G.       */
