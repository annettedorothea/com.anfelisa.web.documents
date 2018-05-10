import Action from "../../ace/SynchronousAction";
import IndexOfEditedCardChangedCommand from "../../../src/author/commands/IndexOfEditedCardChangedCommand";

export default class AbstractIndexOfEditedCardChangedAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'author.IndexOfEditedCardChangedAction', false);
    }

	getCommand() {
		return new IndexOfEditedCardChangedCommand(this.actionData);
	}


}

/*       S.D.G.       */
