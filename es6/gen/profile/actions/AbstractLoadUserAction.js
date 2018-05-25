import Action from "../../ace/AsynchronousAction";
import LoadUserCommand from "../../../src/profile/commands/LoadUserCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractLoadUserAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'profile.LoadUserAction', false);
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new LoadUserCommand(this.actionData);
	}

		preUpdateUI() {
			CommonView.displaySpinner(this.actionParam);
		}
	
		postUpdateUI() {
			CommonView.hideSpinner(this.actionParam);
		}

}

/*       S.D.G.       */
