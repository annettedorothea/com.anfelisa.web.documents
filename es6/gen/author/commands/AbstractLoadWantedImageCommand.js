import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import LoadWantedImageOkEvent from "../../../src/author/events/LoadWantedImageOkEvent";

export default class AbstractLoadWantedImageCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "author.LoadWantedImageCommand");
        this.ok = "ok";
        this.error = "error";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new LoadWantedImageOkEvent(this.commandData).publish());
			break;
		case this.error:
			break;
		default:
			return new Promise((resolve, reject) => {reject('LoadWantedImageCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
