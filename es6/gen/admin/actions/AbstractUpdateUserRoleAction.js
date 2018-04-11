import Action from "../../ace/Action";
import UpdateUserRoleCommand from "../../../src/admin/commands/UpdateUserRoleCommand";

export default class AbstractUpdateUserRoleAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'admin.UpdateUserRoleAction', false);
    }

	getCommand() {
		return new UpdateUserRoleCommand(this.actionData);
	}

	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
