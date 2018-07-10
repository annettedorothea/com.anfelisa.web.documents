import Action from "../../ace/SynchronousAction";
import GivenOfNewCardChangedCommand from "../../../src/author/commands/GivenOfNewCardChangedCommand";

export default class AbstractGivenOfNewCardChangedAction extends Action {

    constructor(actionData) {
        super(actionData, 'author.GivenOfNewCardChangedAction', false, false);
    }

	getCommand() {
		return new GivenOfNewCardChangedCommand(this.actionData);
	}


}

/*       S.D.G.       */
