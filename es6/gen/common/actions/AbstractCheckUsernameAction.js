import Action from "../../ace/Action";
import CheckUsernameCommand from "../../../src/common/commands/CheckUsernameCommand";
import RegistrationView from "../../../src/common/views/RegistrationView";

export default class AbstractCheckUsernameAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'common.CheckUsernameAction', false);
    }

	getCommand() {
		return new CheckUsernameCommand(this.actionData);
	}

	preUpdateUI() {
		RegistrationView.displayUsernameSpinner(this.actionParam);
	}

	postUpdateUI() {
		RegistrationView.hideUsernameSpinner(this.actionParam);
	}

}

/*       S.D.G.       */
