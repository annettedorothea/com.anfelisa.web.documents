import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import SubmitNewPasswordDataInvalidEvent from "../../../src/profile/events/SubmitNewPasswordDataInvalidEvent";
import SubmitNewPasswordMismatchEvent from "../../../src/profile/events/SubmitNewPasswordMismatchEvent";
import RouteAction from "../../../src/common/actions/RouteAction";

export default class AbstractSubmitNewPasswordCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "profile.SubmitNewPasswordCommand");
        this.dataInvalid = "dataInvalid";
        this.mismatch = "mismatch";
        this.saved = "saved";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.dataInvalid:
			promises.push(new SubmitNewPasswordDataInvalidEvent(this.commandData).publish());
			break;
		case this.mismatch:
			promises.push(new SubmitNewPasswordMismatchEvent(this.commandData).publish());
			break;
		case this.saved:
			promises.push(new TriggerAction(new RouteAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('SubmitNewPasswordCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
