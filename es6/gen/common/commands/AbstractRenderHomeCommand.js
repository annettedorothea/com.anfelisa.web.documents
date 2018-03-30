import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import RenderHomeOkEvent from "../../../src/common/events/RenderHomeOkEvent";

export default class AbstractRenderHomeCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "common.RenderHomeCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new RenderHomeOkEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('RenderHomeCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
