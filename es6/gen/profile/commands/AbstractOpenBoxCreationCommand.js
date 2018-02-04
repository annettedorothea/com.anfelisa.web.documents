import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import RenderBoxEvent from "../../../src/profile/events/RenderBoxEvent";

export default class AbstractOpenBoxCreationCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "profile.OpenBoxCreationCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new RenderBoxEvent(this.commandData).publish());
			break;
		default:
			throw 'unhandled outcome: ' + this.commandData.outcome;
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
