import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ScoreReinforceCardUnauthorizedEvent from "../../../gen/box/events/ScoreReinforceCardUnauthorizedEvent";
import LoadNextReinforceCardAction from "../../../src/box/actions/LoadNextReinforceCardAction";
import LogoutAction from "../../../src/common/actions/LogoutAction";

export default class AbstractScoreReinforceCardCommand extends Command {
    constructor(commandData) {
        super(commandData, "box.ScoreReinforceCardCommand");
        this.ok = "ok";
        this.unauthorized = "unauthorized";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new TriggerAction(new LoadNextReinforceCardAction(this.commandData)).publish());
			break;
		case this.unauthorized:
			promises.push(new ScoreReinforceCardUnauthorizedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LogoutAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('ScoreReinforceCardCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
