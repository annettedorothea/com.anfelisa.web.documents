import Action from "../../ace/SynchronousAction";
import GivenOfNewCardChangedCommand from "../../../src/card/commands/GivenOfNewCardChangedCommand";

export default class AbstractGivenOfNewCardChangedAction extends Action {

    constructor( given) {
        super({given}, 'card.GivenOfNewCardChangedAction');
    }
    
	getCommand() {
		return new GivenOfNewCardChangedCommand(this.actionData);
	}


}

/*       S.D.G.       */
