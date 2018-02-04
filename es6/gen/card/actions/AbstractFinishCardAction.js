import Action from "../../ace/Action";
import FinishCardCommand from "../../../src/card/commands/FinishCardCommand";

export default class AbstractFinishCardAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'card.FinishCardAction', false);
    }

	getCommand() {
		return new FinishCardCommand(this.actionData);
	}

	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
