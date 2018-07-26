import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ResetPasswordOkEvent from "../../../src/common/events/ResetPasswordOkEvent";
import ResetPasswordErrorEvent from "../../../src/common/events/ResetPasswordErrorEvent";
import RouteAction from "../../../src/common/actions/RouteAction";

export default class AbstractResetPasswordCommand extends Command {
    constructor(commandData) {
        super(commandData, "common.ResetPasswordCommand");
        this.ok = "ok";
        this.error = "error";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new ResetPasswordOkEvent(this.commandData).publish());
			promises.push(new TriggerAction(new RouteAction(this.commandData)).publish());
			break;
		case this.error:
			promises.push(new ResetPasswordErrorEvent(this.commandData).publish());
			promises.push(new TriggerAction(new RouteAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('ResetPasswordCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
