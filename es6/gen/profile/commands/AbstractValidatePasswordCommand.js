import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import PasswordEmptyEvent from "../../../src/profile/events/PasswordEmptyEvent";
import PasswordsOKEvent from "../../../src/profile/events/PasswordsOKEvent";
import PasswordsMismatchEvent from "../../../src/profile/events/PasswordsMismatchEvent";

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
			promises.push(new PasswordEmptyEvent(this.commandData).publish());
			break;
		case this.ok:
			promises.push(new PasswordsOKEvent(this.commandData).publish());
			break;
		case this.mismatch:
			promises.push(new PasswordsMismatchEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('ValidatePasswordCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
