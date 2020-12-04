/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import * as AppState from "../../ace/AppState";
import DisplayWantedOkEvent from "../../../gen/box/events/DisplayWantedOkEvent";

export default class AbstractDisplayWantedCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "box.DisplayWantedCommand");
        this.commandData.outcomes = [];
        this.commandData.index = AppState.get_cardView_index();
        this.commandData.image = AppState.get_cardView_image();
    }

	addOkOutcome() {
		this.commandData.outcomes.push("ok");
	}

    publishEvents() {
		if (this.commandData.outcomes.includes("ok")) {
			new DisplayWantedOkEvent(this.commandData).publish();
		}
    }
}




/******* S.D.G. *******/



