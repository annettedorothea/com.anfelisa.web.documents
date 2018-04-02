import Action from "../../ace/Action";
import InitCommand from "../../../src/common/commands/InitCommand";

export default class AbstractInitAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'common.InitAction', true);
    }

	getCommand() {
		return new InitCommand(this.actionData);
	}

	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
