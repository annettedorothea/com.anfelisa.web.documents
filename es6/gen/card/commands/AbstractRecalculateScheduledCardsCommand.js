import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ReadNextCardAction from "../../../src/navigation/actions/ReadNextCardAction";
import ReadBoxesAction from "../../../src/navigation/actions/ReadBoxesAction";

export default class AbstractRecalculateScheduledCardsCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "card.RecalculateScheduledCardsCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new TriggerAction(new ReadNextCardAction(this.commandData)).publish());
			promises.push(new TriggerAction(new ReadBoxesAction(this.commandData)).publish());
			break;
		default:
			throw 'unhandled outcome: ' + this.commandData.outcome;
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
