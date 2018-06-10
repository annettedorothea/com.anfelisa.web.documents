import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ScoreCardUnauthorizedEvent from "../../../src/box/events/ScoreCardUnauthorizedEvent";
import LoadNextCardAction from "../../../src/box/actions/LoadNextCardAction";
import LogoutAction from "../../../src/common/actions/LogoutAction";

export default class AbstractScoreCardCommand extends Command {
    constructor(commandData) {
        super(commandData, "box.ScoreCardCommand");
        this.ok = "ok";
        this.unauthorized = "unauthorized";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new TriggerAction(new LoadNextCardAction(this.commandData)).publish());
			break;
		case this.unauthorized:
			promises.push(new ScoreCardUnauthorizedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LogoutAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('ScoreCardCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
