import Action from "../../ace/Action";
import CancelEditCardCommand from "../../../src/author/commands/CancelEditCardCommand";

export default class AbstractCancelEditCardAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'author.CancelEditCardAction', false);
    }

	getCommand() {
		return new CancelEditCardCommand(this.actionData);
	}

	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
