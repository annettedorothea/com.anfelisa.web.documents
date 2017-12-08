import Action from "../../ace/Action";
import ReadReinforceCardsCommand from "../../../src/navigation/commands/ReadReinforceCardsCommand";

export default class AbstractReadReinforceCardsAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'navigation.ReadReinforceCardsAction', false);
    }

	getCommand() {
			return new ReadReinforceCardsCommand(this.actionData);
	}

	
    preUpdateUI() {
    }

    postUpdateUI() {
    }

}

/*       S.D.G.       */
