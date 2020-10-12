/********************************************************************************
 * generated by de.acegen 0.9.12
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import * as AppState from "../../ace/AppState";
import PassValueToDictionaryOkEvent from "../../../gen/card/events/PassValueToDictionaryOkEvent";

export default class AbstractPassValueToDictionaryCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "card.PassValueToDictionaryCommand");
        this.ok = "ok";
        this.commandData.naturalInputOrder = AppState.get_authorView_cardView_naturalInputOrder();
        this.commandData.given = AppState.get_authorView_cardView_newCard_given();
        this.commandData.wanted = AppState.get_authorView_cardView_newCard_wanted();
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new PassValueToDictionaryOkEvent(this.commandData).publish();
			break;
		default:
			throw 'PassValueToDictionaryCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}




/******* S.D.G. *******/



