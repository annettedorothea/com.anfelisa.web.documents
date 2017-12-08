import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import SaveReinforceCardsEvent from "../../../src/card/events/SaveReinforceCardsEvent";
import ServerErrorEvent from "../../../src/common/events/ServerErrorEvent";
import DisplayNextReinforceCardAction from "../../../src/card/actions/DisplayNextReinforceCardAction";
import RouteHomeAction from "../../../src/common/actions/RouteHomeAction";

export default class AbstractReadReinforceCardsCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "navigation.ReadReinforceCardsCommand");
        this.ok = "ok";
        this.error = "error";
    }

    publishEvents() {
    	let promises = [];
    	
        switch (this.commandData.outcome) {
        case this.ok:
        	promises.push(new SaveReinforceCardsEvent(this.commandData).publish());
        	promises.push(new TriggerAction(new DisplayNextReinforceCardAction(this.commandData)).publish());
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
