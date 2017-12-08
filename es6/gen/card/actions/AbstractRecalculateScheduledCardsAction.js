import Action from "../../ace/Action";
import RecalculateScheduledCardsCommand from "../../../src/card/commands/RecalculateScheduledCardsCommand";

export default class AbstractRecalculateScheduledCardsAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'card.RecalculateScheduledCardsAction', false);
    }

	getCommand() {
			return new RecalculateScheduledCardsCommand(this.actionData);
	}

	
    preUpdateUI() {
    }

    postUpdateUI() {
    }

}

/*       S.D.G.       */
