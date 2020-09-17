/********************************************************************************
 * generated by de.acegen 0.9.10
 ********************************************************************************/




import AbstractSynchronousCommand from "../../../gen/ace/AbstractSynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import * as AppState from "../../ace/AppState";
import DisplayWantedOkEvent from "../../../gen/box/events/DisplayWantedOkEvent";

export default class AbstractDisplayWantedCommand extends AbstractSynchronousCommand {
    constructor(commandData) {
        super(commandData, "box.DisplayWantedCommand");
        this.ok = "ok";
        this.commandData.index = AppState.get_cardView_index();
        this.commandData.image = AppState.get_cardView_image();
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new DisplayWantedOkEvent(this.commandData).publish();
			break;
		default:
			throw 'DisplayWantedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}




/******* S.D.G. *******/



