import Action from "../../ace/Action";
import DeleteUserAdminCommand from "../../../src/admin/commands/DeleteUserAdminCommand";

export default class AbstractDeleteUserAdminAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'admin.DeleteUserAdminAction', false);
    }

	getCommand() {
		return new DeleteUserAdminCommand(this.actionData);
	}

	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
