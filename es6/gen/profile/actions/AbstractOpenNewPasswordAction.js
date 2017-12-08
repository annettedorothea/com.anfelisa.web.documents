import Action from "../../ace/Action";
import OpenNewPasswordCommand from "../../../src/profile/commands/OpenNewPasswordCommand";

export default class AbstractOpenNewPasswordAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'profile.OpenNewPasswordAction', false);
    }

	getCommand() {
			return new OpenNewPasswordCommand(this.actionData);
	}

	
    preUpdateUI() {
    }

    postUpdateUI() {
    }

}

/*       S.D.G.       */
