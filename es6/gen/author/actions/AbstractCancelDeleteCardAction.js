import Action from "../../ace/Action";
import CancelDeleteCardCommand from "../../../src/author/commands/CancelDeleteCardCommand";

export default class AbstractCancelDeleteCardAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'author.CancelDeleteCardAction', false);
    }

	getCommand() {
		return new CancelDeleteCardCommand(this.actionData);
	}

	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
