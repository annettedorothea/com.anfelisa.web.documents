import Action from "../../ace/Action";
import SaveProfileCommand from "../../../src/profile/commands/SaveProfileCommand";

export default class AbstractSaveProfileAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'profile.SaveProfileAction', false);
    }

	getCommand() {
		return new SaveProfileCommand(this.actionData);
	}

	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
