import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import RenderHomeEvent from "../../../src/common/events/RenderHomeEvent";

export default class AbstractRenderHomeCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "common.RenderHomeCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new RenderHomeEvent(this.commandData).publish());
			break;
		default:
			throw 'unhandled outcome: ' + this.commandData.outcome;
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
