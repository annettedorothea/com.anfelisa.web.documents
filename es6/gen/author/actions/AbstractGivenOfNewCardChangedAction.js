import Action from "../../ace/SynchronousAction";
import GivenOfNewCardChangedCommand from "../../../src/author/commands/GivenOfNewCardChangedCommand";

export default class AbstractGivenOfNewCardChangedAction extends Action {

    constructor() {
        super({}, 'author.GivenOfNewCardChangedAction');
    }
    
	getCommand() {
		return new GivenOfNewCardChangedCommand(this.actionData);
	}


}

/*       S.D.G.       */
