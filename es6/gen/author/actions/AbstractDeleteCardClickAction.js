import Action from "../../ace/SynchronousAction";
import DeleteCardClickCommand from "../../../src/author/commands/DeleteCardClickCommand";

export default class AbstractDeleteCardClickAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'author.DeleteCardClickAction', false);
    }

	getCommand() {
		return new DeleteCardClickCommand(this.actionData);
	}


}

/*       S.D.G.       */
