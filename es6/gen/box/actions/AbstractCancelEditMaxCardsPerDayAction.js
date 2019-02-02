import Action from "../../ace/SynchronousAction";
import CancelEditMaxCardsPerDayCommand from "../../../src/box/commands/CancelEditMaxCardsPerDayCommand";

export default class AbstractCancelEditMaxCardsPerDayAction extends Action {

    constructor() {
        super({}, 'box.CancelEditMaxCardsPerDayAction');
    }
    
	getCommand() {
		return new CancelEditMaxCardsPerDayCommand(this.actionData);
	}


}

/*       S.D.G.       */
