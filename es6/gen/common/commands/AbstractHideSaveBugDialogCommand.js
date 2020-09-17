/********************************************************************************
 * generated by de.acegen 0.9.10
 ********************************************************************************/




import AbstractSynchronousCommand from "../../../gen/ace/AbstractSynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import * as AppState from "../../ace/AppState";
import HideSaveBugDialogOkEvent from "../../../gen/common/events/HideSaveBugDialogOkEvent";
import DisplayMessageAction from "../../../src/common/actions/DisplayMessageAction";

export default class AbstractHideSaveBugDialogCommand extends AbstractSynchronousCommand {
    constructor(commandData) {
        super(commandData, "common.HideSaveBugDialogCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new HideSaveBugDialogOkEvent(this.commandData).publish();
			new TriggerAction(new DisplayMessageAction(this.commandData.messageKey)).publish();
			break;
		default:
			throw 'HideSaveBugDialogCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}




/******* S.D.G. *******/



