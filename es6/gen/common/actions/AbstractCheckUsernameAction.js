import Action from "../../ace/AsynchronousAction";
import CheckUsernameCommand from "../../../src/common/commands/CheckUsernameCommand";
import RegistrationView from "../../../src/common/views/RegistrationView";

export default class AbstractCheckUsernameAction extends Action {

    constructor(actionData) {
        super(actionData, 'common.CheckUsernameAction', false);
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new CheckUsernameCommand(this.actionData);
	}

		preUpdateUI() {
			RegistrationView.displayUsernameSpinner(this.actionData);
		}
	
		postUpdateUI() {
			RegistrationView.hideUsernameSpinner(this.actionData);
		}

}

/*       S.D.G.       */
