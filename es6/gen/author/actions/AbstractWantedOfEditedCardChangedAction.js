import Action from "../../ace/SynchronousAction";
import WantedOfEditedCardChangedCommand from "../../../src/author/commands/WantedOfEditedCardChangedCommand";

export default class AbstractWantedOfEditedCardChangedAction extends Action {

    constructor() {
        super({}, 'author.WantedOfEditedCardChangedAction');
    }
    
	getCommand() {
		return new WantedOfEditedCardChangedCommand(this.actionData);
	}


}

/*       S.D.G.       */
