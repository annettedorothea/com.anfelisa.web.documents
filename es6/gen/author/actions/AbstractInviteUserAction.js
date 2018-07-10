import Action from "../../ace/AsynchronousAction";
import InviteUserCommand from "../../../src/author/commands/InviteUserCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractInviteUserAction extends Action {

    constructor(actionData) {
        super(actionData, 'author.InviteUserAction', false, false);
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new InviteUserCommand(this.actionData);
	}

		preUpdateUI() {
			CommonView.displaySpinner(this.actionData);
		}
	
		postUpdateUI() {
			CommonView.hideSpinner(this.actionData);
		}

}

/*       S.D.G.       */
