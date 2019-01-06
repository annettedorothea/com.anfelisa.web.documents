import Action from "../../ace/SynchronousAction";
import RemoveEditedCardImageCommand from "../../../src/card/commands/RemoveEditedCardImageCommand";

export default class AbstractRemoveEditedCardImageAction extends Action {

    constructor() {
        super({}, 'card.RemoveEditedCardImageAction');
    }
    
	getCommand() {
		return new RemoveEditedCardImageCommand(this.actionData);
	}


}

/*       S.D.G.       */