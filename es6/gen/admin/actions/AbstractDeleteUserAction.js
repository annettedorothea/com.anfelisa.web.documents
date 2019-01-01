import Action from "../../ace/AsynchronousAction";
import DeleteUserCommand from "../../../src/admin/commands/DeleteUserCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractDeleteUserAction extends Action {

    constructor() {
        super({}, 'admin.DeleteUserAction');
		this.postCall = this.postCall.bind(this);
    }

	getCommand() {
		return new DeleteUserCommand(this.actionData);
	}

	preCall() {
		CommonView.displaySpinner(this.actionData);
	}
	
	postCall() {
		CommonView.hideSpinner(this.actionData);
	}

}

/*       S.D.G.       */
