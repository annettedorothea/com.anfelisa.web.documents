import Action from "../../ace/SynchronousAction";
import ToggleInputOrderCommand from "../../../src/author/commands/ToggleInputOrderCommand";

export default class AbstractToggleInputOrderAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'author.ToggleInputOrderAction', false);
    }

	getCommand() {
		return new ToggleInputOrderCommand(this.actionData);
	}


}

/*       S.D.G.       */
