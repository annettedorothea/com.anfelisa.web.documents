import Action from "../../ace/SynchronousAction";
import RegisterUserCommand from "../../../src/registration/commands/RegisterUserCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractRegisterUserAction extends Action {

    constructor(actionData) {
        super(actionData, 'registration.RegisterUserAction');
    }

	getCommand() {
		return new RegisterUserCommand(this.actionData);
	}


}

/*       S.D.G.       */
