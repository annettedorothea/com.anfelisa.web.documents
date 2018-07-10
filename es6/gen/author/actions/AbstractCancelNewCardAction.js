import Action from "../../ace/SynchronousAction";
import CancelNewCardCommand from "../../../src/author/commands/CancelNewCardCommand";

export default class AbstractCancelNewCardAction extends Action {

    constructor(actionData) {
        super(actionData, 'author.CancelNewCardAction', false, false);
    }

	getCommand() {
		return new CancelNewCardCommand(this.actionData);
	}


}

/*       S.D.G.       */
