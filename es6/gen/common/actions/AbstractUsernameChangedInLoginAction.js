import Action from "../../ace/SynchronousAction";
import UsernameChangedInLoginCommand from "../../../src/common/commands/UsernameChangedInLoginCommand";

export default class AbstractUsernameChangedInLoginAction extends Action {

    constructor(actionData) {
        super(actionData, 'common.UsernameChangedInLoginAction');
    }

	getCommand() {
		return new UsernameChangedInLoginCommand(this.actionData);
	}


}

/*       S.D.G.       */
