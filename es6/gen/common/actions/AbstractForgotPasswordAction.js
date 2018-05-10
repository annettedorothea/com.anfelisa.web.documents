import Action from "../../ace/AsynchronousAction";
import ForgotPasswordCommand from "../../../src/common/commands/ForgotPasswordCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractForgotPasswordAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'common.ForgotPasswordAction', false);
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new ForgotPasswordCommand(this.actionData);
	}

		preUpdateUI() {
			CommonView.displaySpinner(this.actionParam);
		}
	
		postUpdateUI() {
			CommonView.hideSpinner(this.actionParam);
		}

}

/*       S.D.G.       */
