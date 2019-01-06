import Action from "../../ace/AsynchronousAction";
import InviteUserClickCommand from "../../../src/category/commands/InviteUserClickCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractInviteUserClickAction extends Action {

    constructor() {
        super({}, 'category.InviteUserClickAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new InviteUserClickCommand(this.actionData);
	}

	preCall() {
		CommonView.displaySpinner(this.actionData);
	}
	
	postCall() {
		CommonView.hideSpinner(this.actionData);
	}

}

/*       S.D.G.       */
