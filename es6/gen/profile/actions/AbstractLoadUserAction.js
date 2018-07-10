import Action from "../../ace/AsynchronousAction";
import LoadUserCommand from "../../../src/profile/commands/LoadUserCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractLoadUserAction extends Action {

    constructor(actionData) {
        super(actionData, 'profile.LoadUserAction');
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new LoadUserCommand(this.actionData);
	}

		preUpdateUI() {
			CommonView.displaySpinner(this.actionData);
		}
	
		postUpdateUI() {
			CommonView.hideSpinner(this.actionData);
		}

}

/*       S.D.G.       */
