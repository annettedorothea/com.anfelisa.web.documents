import Action from "../../ace/AsynchronousAction";
import ConfirmEmailCommand from "../../../src/registration/commands/ConfirmEmailCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractConfirmEmailAction extends Action {

    constructor(actionData) {
        super(actionData, 'registration.ConfirmEmailAction');
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new ConfirmEmailCommand(this.actionData);
	}

		preUpdateUI() {
			CommonView.displaySpinner(this.actionData);
		}
	
		postUpdateUI() {
			CommonView.hideSpinner(this.actionData);
		}

}

/*       S.D.G.       */
