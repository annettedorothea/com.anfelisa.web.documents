import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import LoadNextCardAction from "../../../src/box/actions/LoadNextCardAction";

export default class AbstractScoreCardCommand extends Command {
    constructor(commandData) {
        super(commandData, "box.ScoreCardCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new TriggerAction(new LoadNextCardAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('ScoreCardCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
