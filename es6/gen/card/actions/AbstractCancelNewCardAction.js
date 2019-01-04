import Action from "../../ace/SynchronousAction";
import CancelNewCardCommand from "../../../src/card/commands/CancelNewCardCommand";

export default class AbstractCancelNewCardAction extends Action {

    constructor() {
        super({}, 'card.CancelNewCardAction');
    }
    
	getCommand() {
		return new CancelNewCardCommand(this.actionData);
	}


}

/*       S.D.G.       */
