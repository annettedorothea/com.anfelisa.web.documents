import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import EmailChangedValidEvent from "../../../gen/registration/events/EmailChangedValidEvent";
import EmailChangedInvalidEvent from "../../../gen/registration/events/EmailChangedInvalidEvent";

export default class AbstractEmailChangedCommand extends Command {
    constructor(commandData) {
        super(commandData, "registration.EmailChangedCommand");
        this.valid = "valid";
        this.invalid = "invalid";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.valid:
			new EmailChangedValidEvent(this.commandData).publish();
			break;
		case this.invalid:
			new EmailChangedInvalidEvent(this.commandData).publish();
			break;
		default:
			throw 'EmailChangedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */