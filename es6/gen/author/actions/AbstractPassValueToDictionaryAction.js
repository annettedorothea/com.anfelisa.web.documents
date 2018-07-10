import Action from "../../ace/SynchronousAction";
import PassValueToDictionaryCommand from "../../../src/author/commands/PassValueToDictionaryCommand";

export default class AbstractPassValueToDictionaryAction extends Action {

    constructor(actionData) {
        super(actionData, 'author.PassValueToDictionaryAction');
    }

	getCommand() {
		return new PassValueToDictionaryCommand(this.actionData);
	}


}

/*       S.D.G.       */
