import Action from "../../ace/AsynchronousAction";
import GetRoleCommand from "../../../src/login/commands/GetRoleCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractGetRoleAction extends Action {

    constructor() {
        super({}, 'login.GetRoleAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new GetRoleCommand(this.actionData);
	}

	preCall() {
		CommonView.displaySpinner(this.actionData);
	}
	
	postCall() {
		CommonView.hideSpinner(this.actionData);
	}

}

/*       S.D.G.       */
