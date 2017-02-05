'use strict';

class AbstractScoreReinforcedCardCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "ScoreReinforcedCardCommand");
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
