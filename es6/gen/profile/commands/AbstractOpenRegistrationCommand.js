import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import RenderRegistrationEvent from "../../../src/profile/events/RenderRegistrationEvent";

export default class AbstractOpenRegistrationCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "profile.OpenRegistrationCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new RenderRegistrationEvent(this.commandData).publish());
			break;
		default:
			throw 'unhandled outcome: ' + this.commandData.outcome;
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
