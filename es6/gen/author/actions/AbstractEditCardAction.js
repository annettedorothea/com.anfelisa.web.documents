import Action from "../../ace/SynchronousAction";
import EditCardCommand from "../../../src/author/commands/EditCardCommand";

export default class AbstractEditCardAction extends Action {

    constructor(actionData) {
        super(actionData, 'author.EditCardAction');
    }

	getCommand() {
		return new EditCardCommand(this.actionData);
	}


}

/*       S.D.G.       */
