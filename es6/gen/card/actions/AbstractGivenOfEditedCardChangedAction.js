/********************************************************************************
 * generated by de.acegen 0.9.10
 ********************************************************************************/




import Action from "../../ace/SynchronousAction";
import GivenOfEditedCardChangedCommand from "../../../src/card/commands/GivenOfEditedCardChangedCommand";

export default class AbstractGivenOfEditedCardChangedAction extends Action {

    constructor( given) {
        super({given}, 'card.GivenOfEditedCardChangedAction');
		}
		
	getCommand() {
		return new GivenOfEditedCardChangedCommand(this.actionData);
	}


}




/******* S.D.G. *******/



