import Action from "../../ace/SynchronousAction";
import MaxCardsPerDayChangedCommand from "../../../src/box/commands/MaxCardsPerDayChangedCommand";

export default class AbstractMaxCardsPerDayChangedAction extends Action {

    constructor( editedMaxCardsPerDay) {
        super({editedMaxCardsPerDay}, 'box.MaxCardsPerDayChangedAction');
    }
    
	getCommand() {
		return new MaxCardsPerDayChangedCommand(this.actionData);
	}


}

/*       S.D.G.       */
