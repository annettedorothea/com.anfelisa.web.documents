import Action from "../../ace/SynchronousAction";
import DeleteCardClickCommand from "../../../src/author/commands/DeleteCardClickCommand";

export default class AbstractDeleteCardClickAction extends Action {

    constructor(actionData) {
        super(actionData, 'author.DeleteCardClickAction', false);
    }

	getCommand() {
		return new DeleteCardClickCommand(this.actionData);
	}


}

/*       S.D.G.       */
