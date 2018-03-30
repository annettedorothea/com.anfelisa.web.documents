import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import UpdatePasswordDataInvalidEvent from "../../../src/profile/events/UpdatePasswordDataInvalidEvent";
import UpdatePasswordMismatchEvent from "../../../src/profile/events/UpdatePasswordMismatchEvent";
import UpdatePasswordSavedEvent from "../../../src/profile/events/UpdatePasswordSavedEvent";
import RouteAction from "../../../src/common/actions/RouteAction";

export default class AbstractUpdatePasswordCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "profile.UpdatePasswordCommand");
        this.dataInvalid = "dataInvalid";
        this.mismatch = "mismatch";
        this.saved = "saved";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.dataInvalid:
			promises.push(new UpdatePasswordDataInvalidEvent(this.commandData).publish());
			break;
		case this.mismatch:
			promises.push(new UpdatePasswordMismatchEvent(this.commandData).publish());
			break;
		case this.saved:
			promises.push(new UpdatePasswordSavedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new RouteAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('UpdatePasswordCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
