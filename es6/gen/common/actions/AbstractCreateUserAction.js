import Action from "../../ace/Action";
import CreateUserCommand from "../../../src/common/commands/CreateUserCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractCreateUserAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'common.CreateUserAction', false);
    }

	getCommand() {
		return new CreateUserCommand(this.actionData);
	}

	preUpdateUI() {
		CommonView.displaySpinner(this.actionParam);
	}

	postUpdateUI() {
		CommonView.hideSpinner(this.actionParam);
	}

}

/*       S.D.G.       */
