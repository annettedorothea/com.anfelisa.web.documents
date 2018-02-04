import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import RenderForgotPasswordEvent from "../../../src/profile/events/RenderForgotPasswordEvent";

export default class AbstractOpenForgotPasswordCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "profile.OpenForgotPasswordCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new RenderForgotPasswordEvent(this.commandData).publish());
			break;
		default:
			throw 'unhandled outcome: ' + this.commandData.outcome;
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
