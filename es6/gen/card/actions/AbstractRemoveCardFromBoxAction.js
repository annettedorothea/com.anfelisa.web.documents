import Action from "../../ace/Action";
import RemoveCardFromBoxCommand from "../../../src/card/commands/RemoveCardFromBoxCommand";

export default class AbstractRemoveCardFromBoxAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'card.RemoveCardFromBoxAction', false);
    }

	getCommand() {
		return new RemoveCardFromBoxCommand(this.actionData);
	}

	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
