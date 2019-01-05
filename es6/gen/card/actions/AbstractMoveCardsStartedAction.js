import Action from "../../ace/SynchronousAction";
import MoveCardsStartedCommand from "../../../src/card/commands/MoveCardsStartedCommand";

export default class AbstractMoveCardsStartedAction extends Action {

    constructor() {
        super({}, 'card.MoveCardsStartedAction');
    }
    
	getCommand() {
		return new MoveCardsStartedCommand(this.actionData);
	}


}

/*       S.D.G.       */
