import Action from "../../ace/Action";
import LoadAllUsersCommand from "../../../src/admin/commands/LoadAllUsersCommand";

export default class AbstractLoadAllUsersAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'admin.LoadAllUsersAction', false);
    }

	getCommand() {
		return new LoadAllUsersCommand(this.actionData);
	}

	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
