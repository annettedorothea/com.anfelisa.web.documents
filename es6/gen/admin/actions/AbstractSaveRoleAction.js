import Action from "../../ace/AsynchronousAction";
import SaveRoleCommand from "../../../src/admin/commands/SaveRoleCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractSaveRoleAction extends Action {

    constructor( editedUserId, newRole) {
        super({editedUserId, newRole}, 'admin.SaveRoleAction');
		this.postCall = this.postCall.bind(this);
    }

	getCommand() {
		return new SaveRoleCommand(this.actionData);
	}

	preCall() {
		CommonView.displaySpinner(this.actionData);
	}
	
	postCall() {
		CommonView.hideSpinner(this.actionData);
	}

}

/*       S.D.G.       */
