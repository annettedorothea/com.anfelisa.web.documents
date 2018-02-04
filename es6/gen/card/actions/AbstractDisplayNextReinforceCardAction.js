import Action from "../../ace/Action";
import DisplayNextReinforceCardCommand from "../../../src/card/commands/DisplayNextReinforceCardCommand";

export default class AbstractDisplayNextReinforceCardAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'card.DisplayNextReinforceCardAction', false);
    }

	getCommand() {
		return new DisplayNextReinforceCardCommand(this.actionData);
	}

	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
