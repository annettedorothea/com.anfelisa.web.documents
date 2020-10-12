/********************************************************************************
 * generated by de.acegen 0.9.12
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import PasswordChangedOkEvent from "../../../gen/registration/events/PasswordChangedOkEvent";

export default class AbstractPasswordChangedCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "registration.PasswordChangedCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new PasswordChangedOkEvent(this.commandData).publish();
			break;
		default:
			throw 'PasswordChangedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}




/******* S.D.G. *******/



