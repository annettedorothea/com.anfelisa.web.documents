import Action from "../../ace/SynchronousAction";
import LoginCommand from "../../../src/login/commands/LoginCommand";

export default class AbstractLoginAction extends Action {

    constructor(actionData) {
        super(actionData, 'login.LoginAction');
    }

	getCommand() {
		return new LoginCommand(this.actionData);
	}


}

/*       S.D.G.       */
