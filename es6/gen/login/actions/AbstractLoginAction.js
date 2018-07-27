import Action from "../../ace/AsynchronousAction";
import LoginCommand from "../../../src/login/commands/LoginCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractLoginAction extends Action {

    constructor(actionData) {
        super(actionData, 'login.LoginAction');
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new LoginCommand(this.actionData);
	}

		preUpdateUI() {
			CommonView.displaySpinner(this.actionData);
		}
	
		postUpdateUI() {
			CommonView.hideSpinner(this.actionData);
		}

}

/*       S.D.G.       */
