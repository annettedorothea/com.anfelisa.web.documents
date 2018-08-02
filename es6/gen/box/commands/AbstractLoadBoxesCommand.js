import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import LoadBoxesOkEvent from "../../../gen/box/events/LoadBoxesOkEvent";

export default class AbstractLoadBoxesCommand extends Command {
    constructor(commandData) {
        super(commandData, "box.LoadBoxesCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new LoadBoxesOkEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('LoadBoxesCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
