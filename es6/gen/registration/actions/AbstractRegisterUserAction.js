import Action from "../../ace/AsynchronousAction";
import RegisterUserCommand from "../../../src/registration/commands/RegisterUserCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractRegisterUserAction extends Action {

    constructor(actionData) {
        super(actionData, 'registration.RegisterUserAction');
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new RegisterUserCommand(this.actionData);
	}

		preUpdateUI() {
			CommonView.displaySpinner(this.actionData);
		}
	
		postUpdateUI() {
			CommonView.hideSpinner(this.actionData);
		}

}

/*       S.D.G.       */
