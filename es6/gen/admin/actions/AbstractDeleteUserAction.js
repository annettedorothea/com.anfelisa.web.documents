import Action from "../../ace/AsynchronousAction";
import DeleteUserCommand from "../../../src/admin/commands/DeleteUserCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractDeleteUserAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'admin.DeleteUserAction', false);
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new DeleteUserCommand(this.actionData);
	}

		preUpdateUI() {
			CommonView.displaySpinner(this.actionParam);
		}
	
		postUpdateUI() {
			CommonView.hideSpinner(this.actionParam);
		}

}

/*       S.D.G.       */
