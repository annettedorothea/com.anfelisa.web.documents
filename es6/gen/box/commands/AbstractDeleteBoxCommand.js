import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import DeleteBoxUnauthorizedEvent from "../../../src/box/events/DeleteBoxUnauthorizedEvent";
import LoadBoxesAction from "../../../src/box/actions/LoadBoxesAction";
import ClearToastAction from "../../../src/common/actions/ClearToastAction";
import LogoutAction from "../../../src/common/actions/LogoutAction";

export default class AbstractDeleteBoxCommand extends Command {
    constructor(commandData) {
        super(commandData, "box.DeleteBoxCommand");
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
			promises.push(new DeleteBoxUnauthorizedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new ClearToastAction(this.commandData)).publish());
			promises.push(new TriggerAction(new LogoutAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('DeleteBoxCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
