import Action from "../../ace/Action";
import GivenOfEditedCardChangedCommand from "../../../src/author/commands/GivenOfEditedCardChangedCommand";

export default class AbstractGivenOfEditedCardChangedAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'author.GivenOfEditedCardChangedAction', false);
    }

	getCommand() {
		return new GivenOfEditedCardChangedCommand(this.actionData);
	}

	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
