import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ForgotPasswordOkEvent from "../../../src/common/events/ForgotPasswordOkEvent";
import ClearToastAction from "../../../src/common/actions/ClearToastAction";
import RouteAction from "../../../src/common/actions/RouteAction";

export default class AbstractForgotPasswordCommand extends Command {
    constructor(commandData) {
        super(commandData, "common.ForgotPasswordCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new ForgotPasswordOkEvent(this.commandData).publish());
			promises.push(new TriggerAction(new ClearToastAction(this.commandData)).publish());
			promises.push(new TriggerAction(new RouteAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('ForgotPasswordCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
