import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ServerErrorEvent from "../../../src/common/events/ServerErrorEvent";
import ReadNextCardAction from "../../../src/navigation/actions/ReadNextCardAction";
import ReadBoxesAction from "../../../src/navigation/actions/ReadBoxesAction";
import RouteHomeAction from "../../../src/common/actions/RouteHomeAction";

export default class AbstractRecalculateScheduledCardsCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "card.RecalculateScheduledCardsCommand");
        this.ok = "ok";
        this.error = "error";
    }

    publishEvents() {
    	let promises = [];
    	
        switch (this.commandData.outcome) {
        case this.ok:
        	promises.push(new TriggerAction(new ReadNextCardAction(this.commandData)).publish());
        	promises.push(new TriggerAction(new ReadBoxesAction(this.commandData)).publish());
        	break;
        case this.error:
        	promises.push(new ServerErrorEvent(this.commandData).publish());
        	promises.push(new TriggerAction(new RouteHomeAction(this.commandData)).publish());
        	break;
    	default:
    		throw 'unhandled outcome: ' + this.commandData.outcome;
    	}
    	return Promise.all(promises);
    }
}

/*       S.D.G.       */
