import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import RenderLoginOkEvent from "../../../src/common/events/RenderLoginOkEvent";

export default class AbstractRenderLoginCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "common.RenderLoginCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new RenderLoginOkEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('RenderLoginCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
