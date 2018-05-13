import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import TranslateOkEvent from "../../../src/author/events/TranslateOkEvent";

export default class AbstractTranslateCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "author.TranslateCommand");
        this.ok = "ok";
        this.error = "error";
        this.empty = "empty";
        this.wantedNotEmpty = "wantedNotEmpty";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new TranslateOkEvent(this.commandData).publish());
			break;
		case this.error:
			break;
		case this.empty:
			break;
		case this.wantedNotEmpty:
			break;
		default:
			return new Promise((resolve, reject) => {reject('TranslateCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
