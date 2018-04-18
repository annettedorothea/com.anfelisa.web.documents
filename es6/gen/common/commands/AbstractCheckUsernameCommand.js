import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import CheckUsernameAvailableEvent from "../../../src/common/events/CheckUsernameAvailableEvent";
import CheckUsernameNotAvailableEvent from "../../../src/common/events/CheckUsernameNotAvailableEvent";

export default class AbstractCheckUsernameCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "common.CheckUsernameCommand");
        this.empty = "empty";
        this.available = "available";
        this.notAvailable = "notAvailable";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.empty:
			break;
		case this.available:
			promises.push(new CheckUsernameAvailableEvent(this.commandData).publish());
			break;
		case this.notAvailable:
			promises.push(new CheckUsernameNotAvailableEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('CheckUsernameCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
