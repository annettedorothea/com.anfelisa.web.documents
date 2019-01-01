import Action from "../../ace/SynchronousAction";
import ToggleUseDictionaryCommand from "../../../src/author/commands/ToggleUseDictionaryCommand";

export default class AbstractToggleUseDictionaryAction extends Action {

    constructor() {
        super({}, 'author.ToggleUseDictionaryAction');
    }

	getCommand() {
		return new ToggleUseDictionaryCommand(this.actionData);
	}


}

/*       S.D.G.       */
