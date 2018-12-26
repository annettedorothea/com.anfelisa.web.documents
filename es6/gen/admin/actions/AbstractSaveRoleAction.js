import Action from "../../ace/SynchronousAction";
import SaveRoleCommand from "../../../src/admin/commands/SaveRoleCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractSaveRoleAction extends Action {

    constructor(actionData) {
        super(actionData, 'admin.SaveRoleAction');
    }

	getCommand() {
		return new SaveRoleCommand(this.actionData);
	}


}

/*       S.D.G.       */
