import Action from "../../ace/Action";
import ResetPasswordCommand from "../../../src/common/commands/ResetPasswordCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractResetPasswordAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'common.ResetPasswordAction', false);
    }

	getCommand() {
		return new ResetPasswordCommand(this.actionData);
	}

	preUpdateUI() {
		CommonView.displaySpinner(this.actionParam);
	}

	postUpdateUI() {
		CommonView.hideSpinner(this.actionParam);
	}

}

/*       S.D.G.       */
