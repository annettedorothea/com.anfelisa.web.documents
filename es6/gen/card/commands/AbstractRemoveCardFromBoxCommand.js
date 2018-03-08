import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import RouteAction from "../../../src/common/actions/RouteAction";

export default class AbstractRemoveCardFromBoxCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "card.RemoveCardFromBoxCommand");
        this.scored = "scored";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.scored:
			promises.push(new TriggerAction(new RouteAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('RemoveCardFromBoxCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
