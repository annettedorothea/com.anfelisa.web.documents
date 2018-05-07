import Action from "../../ace/Action";
import WamtedOfEditedCardChangedCommand from "../../../src/author/commands/WamtedOfEditedCardChangedCommand";

export default class AbstractWamtedOfEditedCardChangedAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'author.WamtedOfEditedCardChangedAction', false);
    }

	getCommand() {
		return new WamtedOfEditedCardChangedCommand(this.actionData);
	}

	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
