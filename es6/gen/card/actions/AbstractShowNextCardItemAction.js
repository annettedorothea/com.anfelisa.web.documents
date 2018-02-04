import Action from "../../ace/Action";
import ShowNextCardItemCommand from "../../../src/card/commands/ShowNextCardItemCommand";

export default class AbstractShowNextCardItemAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'card.ShowNextCardItemAction', false);
    }

	getCommand() {
		return new ShowNextCardItemCommand(this.actionData);
	}

	preUpdateUI() {
	}

	postUpdateUI() {
	}

}

/*       S.D.G.       */
