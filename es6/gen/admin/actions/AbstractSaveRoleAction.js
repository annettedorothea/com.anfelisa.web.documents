import Action from "../../ace/AsynchronousAction";
import SaveRoleCommand from "../../../src/admin/commands/SaveRoleCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractSaveRoleAction extends Action {

    constructor(actionData) {
        super(actionData, 'admin.SaveRoleAction');
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new SaveRoleCommand(this.actionData);
	}

		preUpdateUI() {
			CommonView.displaySpinner(this.actionData);
		}
	
		postUpdateUI() {
			CommonView.hideSpinner(this.actionData);
		}

}

/*       S.D.G.       */
