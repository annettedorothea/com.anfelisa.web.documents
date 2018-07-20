import Action from "../../ace/AsynchronousAction";
import RevokeUserAccessCommand from "../../../src/author/commands/RevokeUserAccessCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractRevokeUserAccessAction extends Action {

    constructor(actionData) {
        super(actionData, 'author.RevokeUserAccessAction');
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new RevokeUserAccessCommand(this.actionData);
	}

		preUpdateUI() {
			CommonView.displaySpinner(this.actionData);
		}
	
		postUpdateUI() {
			CommonView.hideSpinner(this.actionData);
		}

}

/*       S.D.G.       */
