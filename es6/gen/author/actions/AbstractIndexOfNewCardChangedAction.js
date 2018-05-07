import Action from "../../ace/Action";
import IndexOfNewCardChangedCommand from "../../../src/author/commands/IndexOfNewCardChangedCommand";

export default class AbstractIndexOfNewCardChangedAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'author.IndexOfNewCardChangedAction', false);
    }

	getCommand() {
		return new IndexOfNewCardChangedCommand(this.actionData);
	}

	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
