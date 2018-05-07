import Action from "../../ace/Action";
import GivenOfNewCardChangedCommand from "../../../src/author/commands/GivenOfNewCardChangedCommand";

export default class AbstractGivenOfNewCardChangedAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'author.GivenOfNewCardChangedAction', false);
    }

	getCommand() {
		return new GivenOfNewCardChangedCommand(this.actionData);
	}

	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
