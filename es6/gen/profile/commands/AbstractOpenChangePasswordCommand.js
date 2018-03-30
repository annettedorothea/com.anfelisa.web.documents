import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import OpenChangePasswordOkEvent from "../../../src/profile/events/OpenChangePasswordOkEvent";

export default class AbstractOpenChangePasswordCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "profile.OpenChangePasswordCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new OpenChangePasswordOkEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('OpenChangePasswordCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
