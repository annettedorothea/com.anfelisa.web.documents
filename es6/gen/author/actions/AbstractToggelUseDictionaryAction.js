import Action from "../../ace/SynchronousAction";
import ToggelUseDictionaryCommand from "../../../src/author/commands/ToggelUseDictionaryCommand";

export default class AbstractToggelUseDictionaryAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'author.ToggelUseDictionaryAction', false);
    }

	getCommand() {
		return new ToggelUseDictionaryCommand(this.actionData);
	}


}

/*       S.D.G.       */
