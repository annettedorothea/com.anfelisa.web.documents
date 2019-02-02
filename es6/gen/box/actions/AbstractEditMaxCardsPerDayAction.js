import Action from "../../ace/SynchronousAction";
import EditMaxCardsPerDayCommand from "../../../src/box/commands/EditMaxCardsPerDayCommand";

export default class AbstractEditMaxCardsPerDayAction extends Action {

    constructor() {
        super({}, 'box.EditMaxCardsPerDayAction');
    }
    
	getCommand() {
		return new EditMaxCardsPerDayCommand(this.actionData);
	}


}

/*       S.D.G.       */
