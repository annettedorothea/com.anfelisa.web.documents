/********************************************************************************
 * generated by de.acegen 0.9.10
 ********************************************************************************/




import AbstractSynchronousCommand from "../../../gen/ace/AbstractSynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import * as AppState from "../../ace/AppState";
import CancelDeleteCardOkEvent from "../../../gen/card/events/CancelDeleteCardOkEvent";

export default class AbstractCancelDeleteCardCommand extends AbstractSynchronousCommand {
    constructor(commandData) {
        super(commandData, "card.CancelDeleteCardCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new CancelDeleteCardOkEvent(this.commandData).publish();
			break;
		default:
			throw 'CancelDeleteCardCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}




/******* S.D.G. *******/



