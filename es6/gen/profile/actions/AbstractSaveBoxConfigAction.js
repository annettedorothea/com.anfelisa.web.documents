import Action from "../../ace/Action";
import SaveBoxConfigCommand from "../../../src/profile/commands/SaveBoxConfigCommand";

export default class AbstractSaveBoxConfigAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'profile.SaveBoxConfigAction', false);
    }

	getCommand() {
		return new SaveBoxConfigCommand(this.actionData);
	}

	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
