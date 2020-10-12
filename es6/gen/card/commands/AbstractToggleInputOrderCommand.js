/********************************************************************************
 * generated by de.acegen 0.9.12
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import * as AppState from "../../ace/AppState";
import ToggleInputOrderOkEvent from "../../../gen/card/events/ToggleInputOrderOkEvent";

export default class AbstractToggleInputOrderCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "card.ToggleInputOrderCommand");
        this.ok = "ok";
        this.commandData.naturalInputOrder = AppState.get_authorView_cardView_naturalInputOrder();
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new ToggleInputOrderOkEvent(this.commandData).publish();
			break;
		default:
			throw 'ToggleInputOrderCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}




/******* S.D.G. *******/



