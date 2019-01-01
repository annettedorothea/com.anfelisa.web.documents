import Action from "../../ace/SynchronousAction";
import CancelDeleteCardCommand from "../../../src/author/commands/CancelDeleteCardCommand";

export default class AbstractCancelDeleteCardAction extends Action {

    constructor() {
        super({}, 'author.CancelDeleteCardAction');
    }

	getCommand() {
		return new CancelDeleteCardCommand(this.actionData);
	}


}

/*       S.D.G.       */
