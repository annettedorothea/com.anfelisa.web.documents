import Action from "../../ace/SynchronousAction";
import CancelEditCardCommand from "../../../src/author/commands/CancelEditCardCommand";

export default class AbstractCancelEditCardAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'author.CancelEditCardAction', false);
    }

	getCommand() {
		return new CancelEditCardCommand(this.actionData);
	}


}

/*       S.D.G.       */
