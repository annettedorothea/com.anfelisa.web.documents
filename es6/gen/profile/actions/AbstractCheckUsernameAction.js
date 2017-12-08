import Action from "../../ace/Action";
import CheckUsernameCommand from "../../../src/profile/commands/CheckUsernameCommand";

export default class AbstractCheckUsernameAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'profile.CheckUsernameAction', false);
    }

	getCommand() {
			return new CheckUsernameCommand(this.actionData);
	}

	
    preUpdateUI() {
    }

    postUpdateUI() {
    }

}

/*       S.D.G.       */
