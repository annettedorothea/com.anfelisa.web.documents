import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import RouteAction from "../../../src/common/actions/RouteAction";

export default class AbstractCreateBoxCommand extends Command {
    constructor(commandData) {
        super(commandData, "box.CreateBoxCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new TriggerAction(new RouteAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('CreateBoxCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
