import Action from "../../ace/AsynchronousAction";
import SaveRoleCommand from "../../../src/admin/commands/SaveRoleCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractSaveRoleAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'admin.SaveRoleAction', false);
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new SaveRoleCommand(this.actionData);
	}

		preUpdateUI() {
			CommonView.displaySpinner(this.actionParam);
		}
	
		postUpdateUI() {
			CommonView.hideSpinner(this.actionParam);
		}

}

/*       S.D.G.       */
