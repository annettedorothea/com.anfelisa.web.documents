import Action from "../../ace/SynchronousAction";
import GetAllUsersCommand from "../../../src/admin/commands/GetAllUsersCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractGetAllUsersAction extends Action {

    constructor(actionData) {
        super(actionData, 'admin.GetAllUsersAction');
    }

	getCommand() {
		return new GetAllUsersCommand(this.actionData);
	}


}

/*       S.D.G.       */
