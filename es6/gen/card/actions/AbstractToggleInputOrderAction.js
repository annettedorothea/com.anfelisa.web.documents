/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import ToggleInputOrderCommand from "../../../src/card/commands/ToggleInputOrderCommand";

export default class AbstractToggleInputOrderAction extends Action {

    constructor() {
        super('card.ToggleInputOrderAction');
	}
		
	getCommand() {
		return new ToggleInputOrderCommand();
	}


}




/******* S.D.G. *******/



