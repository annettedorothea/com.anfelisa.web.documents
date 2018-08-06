import Action from "../../ace/AsynchronousAction";
import ForgotPasswordCommand from "../../../src/password/commands/ForgotPasswordCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractForgotPasswordAction extends Action {

    constructor(actionData) {
        super(actionData, 'password.ForgotPasswordAction');
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new ForgotPasswordCommand(this.actionData);
	}

		preUpdateUI() {
			CommonView.displaySpinner(this.actionData);
		}
	
		postUpdateUI() {
			CommonView.hideSpinner(this.actionData);
		}

}

/*       S.D.G.       */