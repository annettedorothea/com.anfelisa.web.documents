import Action from "../../ace/SynchronousAction";
import CancelDeleteCardCommand from "../../../src/author/commands/CancelDeleteCardCommand";

export default class AbstractCancelDeleteCardAction extends Action {

    constructor(actionData) {
        super(actionData, 'author.CancelDeleteCardAction', false, false);
    }

	getCommand() {
		return new CancelDeleteCardCommand(this.actionData);
	}


}

/*       S.D.G.       */
