import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import OpenForgotPasswordOkEvent from "../../../src/profile/events/OpenForgotPasswordOkEvent";

export default class AbstractOpenForgotPasswordCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "profile.OpenForgotPasswordCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new OpenForgotPasswordOkEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('OpenForgotPasswordCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
