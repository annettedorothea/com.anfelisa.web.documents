import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import OpenNewPasswordOkEvent from "../../../src/profile/events/OpenNewPasswordOkEvent";

export default class AbstractOpenNewPasswordCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "profile.OpenNewPasswordCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new OpenNewPasswordOkEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('OpenNewPasswordCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
