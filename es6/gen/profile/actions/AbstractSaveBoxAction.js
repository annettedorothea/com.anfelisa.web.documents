import Action from "../../ace/Action";
import SaveBoxCommand from "../../../src/profile/commands/SaveBoxCommand";

export default class AbstractSaveBoxAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'profile.SaveBoxAction', false);
    }

	getCommand() {
		return new SaveBoxCommand(this.actionData);
	}

	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
