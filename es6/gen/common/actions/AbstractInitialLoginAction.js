import Action from "../../ace/SynchronousAction";
import InitialLoginCommand from "../../../src/common/commands/InitialLoginCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractInitialLoginAction extends Action {

    constructor(actionData) {
        super(actionData, 'common.InitialLoginAction');
    }

	getCommand() {
		return new InitialLoginCommand(this.actionData);
	}


}

/*       S.D.G.       */
