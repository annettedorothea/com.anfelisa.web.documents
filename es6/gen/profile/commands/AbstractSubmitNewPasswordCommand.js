import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ErrorEvent from "../../../src/common/events/ErrorEvent";
import UserLoggedInEvent from "../../../src/common/events/UserLoggedInEvent";
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
			promises.push(new ErrorEvent(this.commandData).publish());
			break;
		case this.mismatch:
			promises.push(new ErrorEvent(this.commandData).publish());
			break;
		case this.saved:
			promises.push(new UserLoggedInEvent(this.commandData).publish());
			promises.push(new TriggerAction(new RouteAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('SubmitNewPasswordCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
