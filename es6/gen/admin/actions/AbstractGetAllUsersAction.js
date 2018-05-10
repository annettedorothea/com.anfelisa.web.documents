import Action from "../../ace/AsynchronousAction";
import GetAllUsersCommand from "../../../src/admin/commands/GetAllUsersCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractGetAllUsersAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'admin.GetAllUsersAction', false);
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new GetAllUsersCommand(this.actionData);
	}

		preUpdateUI() {
			CommonView.displaySpinner(this.actionParam);
		}
	
		postUpdateUI() {
			CommonView.hideSpinner(this.actionParam);
		}

}

/*       S.D.G.       */
