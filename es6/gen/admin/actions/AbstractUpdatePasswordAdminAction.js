import Action from "../../ace/Action";
import UpdatePasswordAdminCommand from "../../../src/admin/commands/UpdatePasswordAdminCommand";

export default class AbstractUpdatePasswordAdminAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'admin.UpdatePasswordAdminAction', false);
    }

	getCommand() {
		return new UpdatePasswordAdminCommand(this.actionData);
	}

	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
