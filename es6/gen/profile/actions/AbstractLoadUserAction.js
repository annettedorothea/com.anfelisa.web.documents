import Action from "../../ace/SynchronousAction";
import LoadUserCommand from "../../../src/profile/commands/LoadUserCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractLoadUserAction extends Action {

    constructor() {
        super({}, 'profile.LoadUserAction');
    }

	getCommand() {
		return new LoadUserCommand(this.actionData);
	}


}

/*       S.D.G.       */
