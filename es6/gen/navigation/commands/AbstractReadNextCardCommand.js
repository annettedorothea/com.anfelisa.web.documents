import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import NextCardReadEvent from "../../../src/navigation/events/NextCardReadEvent";
import ServerErrorEvent from "../../../src/common/events/ServerErrorEvent";

export default class AbstractReadNextCardCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "navigation.ReadNextCardCommand");
        this.ok = "ok";
        this.error = "error";
    }

    publishEvents() {
    	let promises = [];
    	
        switch (this.commandData.outcome) {
        case this.ok:
        	promises.push(new NextCardReadEvent(this.commandData).publish());
        	break;
        case this.error:
        	promises.push(new ServerErrorEvent(this.commandData).publish());
        	break;
    	default:
    		throw 'unhandled outcome: ' + this.commandData.outcome;
    	}
    	return Promise.all(promises);
    }
}

/*       S.D.G.       */
