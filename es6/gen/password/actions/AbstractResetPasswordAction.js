import Action from "../../ace/AsynchronousAction";
import ResetPasswordCommand from "../../../src/password/commands/ResetPasswordCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractResetPasswordAction extends Action {

    constructor(actionData) {
        super(actionData, 'password.ResetPasswordAction');
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new ResetPasswordCommand(this.actionData);
	}

		preUpdateUI() {
			CommonView.displaySpinner(this.actionData);
		}
	
		postUpdateUI() {
			CommonView.hideSpinner(this.actionData);
		}

}

/*       S.D.G.       */
