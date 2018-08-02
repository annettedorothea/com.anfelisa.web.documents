import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import LoadBoxesAction from "../../../src/box/actions/LoadBoxesAction";

export default class AbstractUpdateBoxCommand extends Command {
    constructor(commandData) {
        super(commandData, "box.UpdateBoxCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new TriggerAction(new LoadBoxesAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('UpdateBoxCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
