import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ScoreReinforcedCardKeepEvent from "../../../src/card/events/ScoreReinforcedCardKeepEvent";
import ScoreReinforcedCardRemoveEvent from "../../../src/card/events/ScoreReinforcedCardRemoveEvent";
import DisplayNextReinforceCardAction from "../../../src/card/actions/DisplayNextReinforceCardAction";

export default class AbstractScoreReinforcedCardCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "card.ScoreReinforcedCardCommand");
        this.keep = "keep";
        this.remove = "remove";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.keep:
			promises.push(new ScoreReinforcedCardKeepEvent(this.commandData).publish());
			promises.push(new TriggerAction(new DisplayNextReinforceCardAction(this.commandData)).publish());
			break;
		case this.remove:
			promises.push(new ScoreReinforcedCardRemoveEvent(this.commandData).publish());
			promises.push(new TriggerAction(new DisplayNextReinforceCardAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('ScoreReinforcedCardCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
