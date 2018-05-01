import Action from "../../ace/Action";
import RegisterUserCommand from "../../../src/common/commands/RegisterUserCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractRegisterUserAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'common.RegisterUserAction', false);
    }

	getCommand() {
		return new RegisterUserCommand(this.actionData);
	}

	preUpdateUI() {
		CommonView.displaySpinner(this.actionParam);
	}

	postUpdateUI() {
		CommonView.hideSpinner(this.actionParam);
	}

}

/*       S.D.G.       */
