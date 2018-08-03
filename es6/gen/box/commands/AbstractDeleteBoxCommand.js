import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import DeleteBoxErrorEvent from "../../../gen/box/events/DeleteBoxErrorEvent";
import LoadBoxesAction from "../../../src/box/actions/LoadBoxesAction";
import DisplayErrorAction from "../../../src/common/actions/DisplayErrorAction";

export default class AbstractDeleteBoxCommand extends Command {
    constructor(commandData) {
        super(commandData, "box.DeleteBoxCommand");
        this.ok = "ok";
        this.error = "error";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new TriggerAction(new LoadBoxesAction(this.commandData)).publish());
			break;
		case this.error:
			promises.push(new DeleteBoxErrorEvent(this.commandData).publish());
			promises.push(new TriggerAction(new DisplayErrorAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('DeleteBoxCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
