import Action from "../../ace/SynchronousAction";
import ResetPasswordCommand from "../../../src/password/commands/ResetPasswordCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractResetPasswordAction extends Action {

    constructor() {
        super({}, 'password.ResetPasswordAction');
    }

	getCommand() {
		return new ResetPasswordCommand(this.actionData);
	}


}

/*       S.D.G.       */
