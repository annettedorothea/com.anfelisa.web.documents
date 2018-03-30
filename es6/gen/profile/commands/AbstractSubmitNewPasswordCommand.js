import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import SubmitNewPasswordDataInvalidEvent from "../../../src/profile/events/SubmitNewPasswordDataInvalidEvent";
import SubmitNewPasswordOkEvent from "../../../src/profile/events/SubmitNewPasswordOkEvent";

export default class AbstractSubmitNewPasswordCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "profile.SubmitNewPasswordCommand");
        this.dataInvalid = "dataInvalid";
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.dataInvalid:
			promises.push(new SubmitNewPasswordDataInvalidEvent(this.commandData).publish());
			break;
		case this.ok:
			promises.push(new SubmitNewPasswordOkEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('SubmitNewPasswordCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
