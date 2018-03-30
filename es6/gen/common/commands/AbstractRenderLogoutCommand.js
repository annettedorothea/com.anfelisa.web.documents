import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import RenderLogoutOkEvent from "../../../src/common/events/RenderLogoutOkEvent";

export default class AbstractRenderLogoutCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "common.RenderLogoutCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new RenderLogoutOkEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('RenderLogoutCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
