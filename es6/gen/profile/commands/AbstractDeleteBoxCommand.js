import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import RouteAction from "../../../src/common/actions/RouteAction";

export default class AbstractDeleteBoxCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "profile.DeleteBoxCommand");
        this.deleted = "deleted";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.deleted:
			promises.push(new TriggerAction(new RouteAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('DeleteBoxCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
