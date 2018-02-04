import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import RenderLogoutEvent from "../../../src/common/events/RenderLogoutEvent";

export default class AbstractRenderLogoutCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "common.RenderLogoutCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new RenderLogoutEvent(this.commandData).publish());
			break;
		default:
			throw 'unhandled outcome: ' + this.commandData.outcome;
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
