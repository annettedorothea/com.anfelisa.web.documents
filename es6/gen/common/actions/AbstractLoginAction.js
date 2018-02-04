import Action from "../../ace/Action";
import LoginCommand from "../../../src/common/commands/LoginCommand";

export default class AbstractLoginAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'common.LoginAction', false);
    }

	getCommand() {
		return new LoginCommand(this.actionData);
	}

	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
