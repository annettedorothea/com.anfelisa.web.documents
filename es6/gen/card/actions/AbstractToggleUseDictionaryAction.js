import Action from "../../ace/SynchronousAction";
import ToggleUseDictionaryCommand from "../../../src/card/commands/ToggleUseDictionaryCommand";

export default class AbstractToggleUseDictionaryAction extends Action {

    constructor() {
        super({}, 'card.ToggleUseDictionaryAction');
    }
    
	getCommand() {
		return new ToggleUseDictionaryCommand(this.actionData);
	}


}

/*       S.D.G.       */
