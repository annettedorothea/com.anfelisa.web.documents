import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import RenderChangePasswordEvent from "../../../src/profile/events/RenderChangePasswordEvent";

export default class AbstractOpenChangePasswordCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "profile.OpenChangePasswordCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new RenderChangePasswordEvent(this.commandData).publish());
			break;
		default:
			throw 'unhandled outcome: ' + this.commandData.outcome;
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
