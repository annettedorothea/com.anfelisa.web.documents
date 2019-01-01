import Action from "../../ace/SynchronousAction";
import ForgotPasswordCommand from "../../../src/password/commands/ForgotPasswordCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractForgotPasswordAction extends Action {

    constructor() {
        super({}, 'password.ForgotPasswordAction');
    }

	getCommand() {
		return new ForgotPasswordCommand(this.actionData);
	}


}

/*       S.D.G.       */
