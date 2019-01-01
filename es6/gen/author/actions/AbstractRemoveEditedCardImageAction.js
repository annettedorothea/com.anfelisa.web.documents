import Action from "../../ace/SynchronousAction";
import RemoveEditedCardImageCommand from "../../../src/author/commands/RemoveEditedCardImageCommand";

export default class AbstractRemoveEditedCardImageAction extends Action {

    constructor() {
        super({}, 'author.RemoveEditedCardImageAction');
    }

	getCommand() {
		return new RemoveEditedCardImageCommand(this.actionData);
	}


}

/*       S.D.G.       */
