import Action from "../../ace/Action";
import IndexOfEditedCardChangedCommand from "../../../src/author/commands/IndexOfEditedCardChangedCommand";

export default class AbstractIndexOfEditedCardChangedAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'author.IndexOfEditedCardChangedAction', false);
    }

	getCommand() {
		return new IndexOfEditedCardChangedCommand(this.actionData);
	}

	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
