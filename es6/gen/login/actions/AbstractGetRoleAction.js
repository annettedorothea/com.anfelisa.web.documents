import Action from "../../ace/AsynchronousAction";
import GetRoleCommand from "../../../src/login/commands/GetRoleCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractGetRoleAction extends Action {

    constructor(actionData) {
        super(actionData, 'login.GetRoleAction');
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new GetRoleCommand(this.actionData);
	}

		preUpdateUI() {
			CommonView.displaySpinner(this.actionData);
		}
	
		postUpdateUI() {
			CommonView.hideSpinner(this.actionData);
		}

}

/*       S.D.G.       */
