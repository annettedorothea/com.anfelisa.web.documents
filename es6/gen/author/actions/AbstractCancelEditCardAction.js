import Action from "../../ace/SynchronousAction";
import CancelEditCardCommand from "../../../src/author/commands/CancelEditCardCommand";

export default class AbstractCancelEditCardAction extends Action {

    constructor(actionData) {
        super(actionData, 'author.CancelEditCardAction');
    }

	getCommand() {
		return new CancelEditCardCommand(this.actionData);
	}


}

/*       S.D.G.       */
