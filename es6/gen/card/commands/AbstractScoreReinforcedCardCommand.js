import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import KeepCardInReinforceCardListEvent from "../../../src/card/events/KeepCardInReinforceCardListEvent";
import RemoveCardFromReinforceCardListEvent from "../../../src/card/events/RemoveCardFromReinforceCardListEvent";
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
			promises.push(new KeepCardInReinforceCardListEvent(this.commandData).publish());
			promises.push(new TriggerAction(new DisplayNextReinforceCardAction(this.commandData)).publish());
			break;
		case this.remove:
			promises.push(new RemoveCardFromReinforceCardListEvent(this.commandData).publish());
			promises.push(new TriggerAction(new DisplayNextReinforceCardAction(this.commandData)).publish());
			break;
		default:
			throw 'unhandled outcome: ' + this.commandData.outcome;
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
