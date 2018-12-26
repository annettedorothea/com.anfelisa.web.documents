import Action from "../../ace/SynchronousAction";
import GetRoleCommand from "../../../src/login/commands/GetRoleCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractGetRoleAction extends Action {

    constructor(actionData) {
        super(actionData, 'login.GetRoleAction');
    }

	getCommand() {
		return new GetRoleCommand(this.actionData);
	}


}

/*       S.D.G.       */
