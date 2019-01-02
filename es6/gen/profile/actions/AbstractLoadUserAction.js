import Action from "../../ace/AsynchronousAction";
import LoadUserCommand from "../../../src/profile/commands/LoadUserCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractLoadUserAction extends Action {

    constructor() {
        super({}, 'profile.LoadUserAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new LoadUserCommand(this.actionData);
	}

	preCall() {
		CommonView.displaySpinner(this.actionData);
	}
	
	postCall() {
		CommonView.hideSpinner(this.actionData);
	}

}

/*       S.D.G.       */
