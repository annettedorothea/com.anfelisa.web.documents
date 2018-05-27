import Action from "../../ace/SynchronousAction";
import GivenOfEditedCardChangedCommand from "../../../src/author/commands/GivenOfEditedCardChangedCommand";

export default class AbstractGivenOfEditedCardChangedAction extends Action {

    constructor(actionData) {
        super(actionData, 'author.GivenOfEditedCardChangedAction', false);
    }

	getCommand() {
		return new GivenOfEditedCardChangedCommand(this.actionData);
	}


}

/*       S.D.G.       */
