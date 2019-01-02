import Action from "../../ace/AsynchronousAction";
import ResetPasswordCommand from "../../../src/password/commands/ResetPasswordCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractResetPasswordAction extends Action {

    constructor( password, token) {
        super({password, token}, 'password.ResetPasswordAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new ResetPasswordCommand(this.actionData);
	}

	preCall() {
		CommonView.displaySpinner(this.actionData);
	}
	
	postCall() {
		CommonView.hideSpinner(this.actionData);
	}

}

/*       S.D.G.       */
