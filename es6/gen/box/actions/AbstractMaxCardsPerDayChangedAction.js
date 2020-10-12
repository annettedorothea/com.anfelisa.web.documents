/********************************************************************************
 * generated by de.acegen 0.9.12
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import MaxCardsPerDayChangedCommand from "../../../src/box/commands/MaxCardsPerDayChangedCommand";

export default class AbstractMaxCardsPerDayChangedAction extends Action {

    constructor( maxCardsPerDay) {
        super({maxCardsPerDay}, 'box.MaxCardsPerDayChangedAction');
	}
		
	getCommand() {
		return new MaxCardsPerDayChangedCommand(this.actionData);
	}


}




/******* S.D.G. *******/



