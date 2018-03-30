import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import SaveResultNoCredentialsEvent from "../../../src/common/events/SaveResultNoCredentialsEvent";
import RouteAction from "../../../src/common/actions/RouteAction";

export default class AbstractSaveResultCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "common.SaveResultCommand");
        this.noCredentials = "noCredentials";
        this.resultSaved = "resultSaved";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.noCredentials:
			promises.push(new SaveResultNoCredentialsEvent(this.commandData).publish());
			break;
		case this.resultSaved:
			promises.push(new TriggerAction(new RouteAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('SaveResultCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
