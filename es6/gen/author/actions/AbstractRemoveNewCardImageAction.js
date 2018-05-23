import Action from "../../ace/SynchronousAction";
import RemoveNewCardImageCommand from "../../../src/author/commands/RemoveNewCardImageCommand";

export default class AbstractRemoveNewCardImageAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'author.RemoveNewCardImageAction', false);
    }

	getCommand() {
		return new RemoveNewCardImageCommand(this.actionData);
	}


}

/*       S.D.G.       */
