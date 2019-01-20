import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import EmailChangedOkEvent from "../../../gen/registration/events/EmailChangedOkEvent";

export default class AbstractEmailChangedCommand extends Command {
    constructor(commandData) {
        super(commandData, "registration.EmailChangedCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new EmailChangedOkEvent(this.commandData).publish();
			break;
		default:
			throw 'EmailChangedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
