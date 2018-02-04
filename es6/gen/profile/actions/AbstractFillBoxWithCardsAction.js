import Action from "../../ace/Action";
import FillBoxWithCardsCommand from "../../../src/profile/commands/FillBoxWithCardsCommand";

export default class AbstractFillBoxWithCardsAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'profile.FillBoxWithCardsAction', false);
    }

	getCommand() {
		return new FillBoxWithCardsCommand(this.actionData);
	}

	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
