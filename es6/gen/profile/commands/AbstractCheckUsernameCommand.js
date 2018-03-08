import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import FieldEmptyEvent from "../../../src/common/events/FieldEmptyEvent";
import UsernameIsAvailableEvent from "../../../src/profile/events/UsernameIsAvailableEvent";
import UsernameIsNotAvailableEvent from "../../../src/profile/events/UsernameIsNotAvailableEvent";

export default class AbstractCheckUsernameCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "profile.CheckUsernameCommand");
        this.empty = "empty";
        this.available = "available";
        this.notAvailable = "notAvailable";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.empty:
			promises.push(new FieldEmptyEvent(this.commandData).publish());
			break;
		case this.available:
			promises.push(new UsernameIsAvailableEvent(this.commandData).publish());
			break;
		case this.notAvailable:
			promises.push(new UsernameIsNotAvailableEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('CheckUsernameCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
