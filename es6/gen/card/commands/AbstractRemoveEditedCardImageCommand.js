/********************************************************************************
 * generated by de.acegen 0.9.10
 ********************************************************************************/




import AbstractSynchronousCommand from "../../../gen/ace/AbstractSynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import * as AppState from "../../ace/AppState";
import RemoveEditedCardImageOkEvent from "../../../gen/card/events/RemoveEditedCardImageOkEvent";

export default class AbstractRemoveEditedCardImageCommand extends AbstractSynchronousCommand {
    constructor(commandData) {
        super(commandData, "card.RemoveEditedCardImageCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new RemoveEditedCardImageOkEvent(this.commandData).publish();
			break;
		default:
			throw 'RemoveEditedCardImageCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}




/******* S.D.G. *******/



