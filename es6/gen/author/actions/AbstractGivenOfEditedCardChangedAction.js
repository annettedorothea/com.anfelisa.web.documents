import Action from "../../ace/SynchronousAction";
import GivenOfEditedCardChangedCommand from "../../../src/author/commands/GivenOfEditedCardChangedCommand";

export default class AbstractGivenOfEditedCardChangedAction extends Action {

    constructor() {
        super({}, 'author.GivenOfEditedCardChangedAction');
    }

	getCommand() {
		return new GivenOfEditedCardChangedCommand(this.actionData);
	}


}

/*       S.D.G.       */
