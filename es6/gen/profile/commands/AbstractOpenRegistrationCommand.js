import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import OpenRegistrationOkEvent from "../../../src/profile/events/OpenRegistrationOkEvent";

export default class AbstractOpenRegistrationCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "profile.OpenRegistrationCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new OpenRegistrationOkEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('OpenRegistrationCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
