import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import CheckUsernameAvailableEvent from "../../../gen/registration/events/CheckUsernameAvailableEvent";
import CheckUsernameNotAvailableEvent from "../../../gen/registration/events/CheckUsernameNotAvailableEvent";

export default class AbstractCheckUsernameCommand extends Command {
    constructor(commandData) {
        super(commandData, "registration.CheckUsernameCommand");
        this.empty = "empty";
        this.available = "available";
        this.notAvailable = "notAvailable";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.empty:
			break;
		case this.available:
			new CheckUsernameAvailableEvent(this.commandData).publish();
			break;
		case this.notAvailable:
			new CheckUsernameNotAvailableEvent(this.commandData).publish();
			break;
		default:
			throw 'CheckUsernameCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
