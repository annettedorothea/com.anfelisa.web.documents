import Action from "../../ace/AsynchronousAction";
import InviteUserCommand from "../../../src/category/commands/InviteUserCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractInviteUserAction extends Action {

    constructor() {
        super({}, 'category.InviteUserAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new InviteUserCommand(this.actionData);
	}

	preCall() {
		CommonView.displaySpinner(this.actionData);
	}
	
	postCall() {
		CommonView.hideSpinner(this.actionData);
	}

}

/*       S.D.G.       */
