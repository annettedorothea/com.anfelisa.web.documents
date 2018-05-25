import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import CreateBoxUnauthorizedEvent from "../../../src/box/events/CreateBoxUnauthorizedEvent";
import LoadBoxesAction from "../../../src/box/actions/LoadBoxesAction";
import LogoutAction from "../../../src/common/actions/LogoutAction";

export default class AbstractCreateBoxCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "box.CreateBoxCommand");
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
			promises.push(new CreateBoxUnauthorizedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LogoutAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('CreateBoxCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
