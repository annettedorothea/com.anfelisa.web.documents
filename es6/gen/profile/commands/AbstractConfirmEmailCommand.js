import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ConfirmEmailSavedEvent from "../../../src/profile/events/ConfirmEmailSavedEvent";
import RouteAction from "../../../src/common/actions/RouteAction";

export default class AbstractConfirmEmailCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "profile.ConfirmEmailCommand");
        this.saved = "saved";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.saved:
			promises.push(new ConfirmEmailSavedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new RouteAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('ConfirmEmailCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
