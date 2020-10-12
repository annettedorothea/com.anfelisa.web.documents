/********************************************************************************
 * generated by de.acegen 0.9.12
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import DeleteBoxClickOkEvent from "../../../gen/box/events/DeleteBoxClickOkEvent";

export default class AbstractDeleteBoxClickCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "box.DeleteBoxClickCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new DeleteBoxClickOkEvent(this.commandData).publish();
			break;
		default:
			throw 'DeleteBoxClickCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}




/******* S.D.G. *******/



