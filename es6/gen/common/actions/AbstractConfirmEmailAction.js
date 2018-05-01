import Action from "../../ace/Action";
import ConfirmEmailCommand from "../../../src/common/commands/ConfirmEmailCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractConfirmEmailAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'common.ConfirmEmailAction', false);
    }

	getCommand() {
		return new ConfirmEmailCommand(this.actionData);
	}

	preUpdateUI() {
		CommonView.displaySpinner(this.actionParam);
	}

	postUpdateUI() {
		CommonView.hideSpinner(this.actionParam);
	}

}

/*       S.D.G.       */
