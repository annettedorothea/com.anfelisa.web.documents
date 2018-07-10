import Action from "../../ace/AsynchronousAction";
import GetAllUsersCommand from "../../../src/admin/commands/GetAllUsersCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractGetAllUsersAction extends Action {

    constructor(actionData) {
        super(actionData, 'admin.GetAllUsersAction');
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new GetAllUsersCommand(this.actionData);
	}

		preUpdateUI() {
			CommonView.displaySpinner(this.actionData);
		}
	
		postUpdateUI() {
			CommonView.hideSpinner(this.actionData);
		}

}

/*       S.D.G.       */
