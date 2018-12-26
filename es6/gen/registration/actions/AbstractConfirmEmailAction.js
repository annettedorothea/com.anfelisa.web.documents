import Action from "../../ace/SynchronousAction";
import ConfirmEmailCommand from "../../../src/registration/commands/ConfirmEmailCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractConfirmEmailAction extends Action {

    constructor(actionData) {
        super(actionData, 'registration.ConfirmEmailAction');
    }

	getCommand() {
		return new ConfirmEmailCommand(this.actionData);
	}


}

/*       S.D.G.       */
