import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import RenderNewPasswordEvent from "../../../src/profile/events/RenderNewPasswordEvent";

export default class AbstractOpenNewPasswordCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "profile.OpenNewPasswordCommand");
        this.ok = "ok";
    }

    publishEvents() {
    	let promises = [];
    	
        switch (this.commandData.outcome) {
        case this.ok:
        	promises.push(new RenderNewPasswordEvent(this.commandData).publish());
        	break;
    	default:
    		throw 'unhandled outcome: ' + this.commandData.outcome;
    	}
    	return Promise.all(promises);
    }
}

/*       S.D.G.       */
