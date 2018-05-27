import Action from "../../ace/SynchronousAction";
import ToggleUseDictionaryCommand from "../../../src/author/commands/ToggleUseDictionaryCommand";

export default class AbstractToggleUseDictionaryAction extends Action {

    constructor(actionData) {
        super(actionData, 'author.ToggleUseDictionaryAction', false);
    }

	getCommand() {
		return new ToggleUseDictionaryCommand(this.actionData);
	}


}

/*       S.D.G.       */
