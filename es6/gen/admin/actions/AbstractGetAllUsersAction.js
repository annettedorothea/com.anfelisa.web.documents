import Action from "../../ace/AsynchronousAction";
import GetAllUsersCommand from "../../../src/admin/commands/GetAllUsersCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractGetAllUsersAction extends Action {

    constructor() {
        super({}, 'admin.GetAllUsersAction');
		this.postCall = this.postCall.bind(this);
    }

	getCommand() {
		return new GetAllUsersCommand(this.actionData);
	}

	preCall() {
		CommonView.displaySpinner(this.actionData);
	}
	
	postCall() {
		CommonView.hideSpinner(this.actionData);
	}

}

/*       S.D.G.       */
