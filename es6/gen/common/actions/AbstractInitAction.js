import Action from "../../ace/SynchronousAction";
import InitCommand from "../../../src/common/commands/InitCommand";

export default class AbstractInitAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'common.InitAction', true);
    }

	getCommand() {
		return new InitCommand(this.actionData);
	}


}

/*       S.D.G.       */
