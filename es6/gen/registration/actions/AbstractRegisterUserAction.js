import Action from "../../ace/AsynchronousAction";
import RegisterUserCommand from "../../../src/registration/commands/RegisterUserCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractRegisterUserAction extends Action {

    constructor( username, password) {
        super({username, password}, 'registration.RegisterUserAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new RegisterUserCommand(this.actionData);
	}

	preCall() {
		CommonView.displaySpinner(this.actionData);
	}
	
	postCall() {
		CommonView.hideSpinner(this.actionData);
	}

}

/*       S.D.G.       */
