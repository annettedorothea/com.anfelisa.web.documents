import Action from "../../ace/SynchronousAction";
import WantedOfNewCardChangedCommand from "../../../src/author/commands/WantedOfNewCardChangedCommand";

export default class AbstractWantedOfNewCardChangedAction extends Action {

    constructor() {
        super({}, 'author.WantedOfNewCardChangedAction');
    }
    
	getCommand() {
		return new WantedOfNewCardChangedCommand(this.actionData);
	}


}

/*       S.D.G.       */
