import Action from "../../ace/AsynchronousAction";
import ForgotPasswordCommand from "../../../src/password/commands/ForgotPasswordCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractForgotPasswordAction extends Action {

    constructor() {
        super({}, 'password.ForgotPasswordAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new ForgotPasswordCommand(this.actionData);
	}

	preCall() {
		CommonView.displaySpinner(this.actionData);
	}
	
	postCall() {
		CommonView.hideSpinner(this.actionData);
	}

}

/*       S.D.G.       */
