import Action from "../../ace/SynchronousAction";
import DeleteUserCommand from "../../../src/admin/commands/DeleteUserCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractDeleteUserAction extends Action {

    constructor(actionData) {
        super(actionData, 'admin.DeleteUserAction');
    }

	getCommand() {
		return new DeleteUserCommand(this.actionData);
	}


}

/*       S.D.G.       */
