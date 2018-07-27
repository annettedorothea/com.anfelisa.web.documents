import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import UpdateBoxUnauthorizedEvent from "../../../gen/box/events/UpdateBoxUnauthorizedEvent";
import LoadBoxesAction from "../../../src/box/actions/LoadBoxesAction";
import LogoutAction from "../../../src/common/actions/LogoutAction";

export default class AbstractUpdateBoxCommand extends Command {
    constructor(commandData) {
        super(commandData, "box.UpdateBoxCommand");
        this.ok = "ok";
        this.unauthorized = "unauthorized";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new TriggerAction(new LoadBoxesAction(this.commandData)).publish());
			break;
		case this.unauthorized:
			promises.push(new UpdateBoxUnauthorizedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LogoutAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('UpdateBoxCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
