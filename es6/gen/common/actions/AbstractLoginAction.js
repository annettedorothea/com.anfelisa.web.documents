import Action from "../../ace/AsynchronousAction";
import LoginCommand from "../../../src/common/commands/LoginCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractLoginAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'common.LoginAction', false);
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new LoginCommand(this.actionData);
	}

		preUpdateUI() {
			CommonView.displaySpinner(this.actionParam);
		}
	
		postUpdateUI() {
			CommonView.hideSpinner(this.actionParam);
		}

}

/*       S.D.G.       */
