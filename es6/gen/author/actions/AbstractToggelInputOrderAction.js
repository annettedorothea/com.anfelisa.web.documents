import Action from "../../ace/SynchronousAction";
import ToggelInputOrderCommand from "../../../src/author/commands/ToggelInputOrderCommand";

export default class AbstractToggelInputOrderAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'author.ToggelInputOrderAction', false);
    }

	getCommand() {
		return new ToggelInputOrderCommand(this.actionData);
	}


}

/*       S.D.G.       */
