import Action from "../../ace/AsynchronousAction";
import DeleteUserCommand from "../../../src/admin/commands/DeleteUserCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractDeleteUserAction extends Action {

    constructor(actionData) {
        super(actionData, 'admin.DeleteUserAction', false, false);
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new DeleteUserCommand(this.actionData);
	}

		preUpdateUI() {
			CommonView.displaySpinner(this.actionData);
		}
	
		postUpdateUI() {
			CommonView.hideSpinner(this.actionData);
		}

}

/*       S.D.G.       */
