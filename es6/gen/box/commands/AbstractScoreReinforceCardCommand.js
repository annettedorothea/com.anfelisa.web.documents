import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import LoadNextReinforceCardAction from "../../../src/box/actions/LoadNextReinforceCardAction";

export default class AbstractScoreReinforceCardCommand extends Command {
    constructor(commandData) {
        super(commandData, "box.ScoreReinforceCardCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new TriggerAction(new LoadNextReinforceCardAction(this.commandData)).publish();
			break;
		default:
			throw 'ScoreReinforceCardCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
