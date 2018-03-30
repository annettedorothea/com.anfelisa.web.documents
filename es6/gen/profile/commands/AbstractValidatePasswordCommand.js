import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ValidatePasswordEmptyEvent from "../../../src/profile/events/ValidatePasswordEmptyEvent";
import ValidatePasswordOkEvent from "../../../src/profile/events/ValidatePasswordOkEvent";
import ValidatePasswordMismatchEvent from "../../../src/profile/events/ValidatePasswordMismatchEvent";

export default class AbstractValidatePasswordCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "profile.ValidatePasswordCommand");
        this.empty = "empty";
        this.ok = "ok";
        this.mismatch = "mismatch";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.empty:
			promises.push(new ValidatePasswordEmptyEvent(this.commandData).publish());
			break;
		case this.ok:
			promises.push(new ValidatePasswordOkEvent(this.commandData).publish());
			break;
		case this.mismatch:
			promises.push(new ValidatePasswordMismatchEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('ValidatePasswordCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
