import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import StatisticsReadEvent from "../../../src/navigation/events/StatisticsReadEvent";
import ServerErrorEvent from "../../../src/common/events/ServerErrorEvent";

export default class AbstractReadStatisticsCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "navigation.ReadStatisticsCommand");
        this.ok = "ok";
        this.error = "error";
    }

    publishEvents() {
    	let promises = [];
    	
        switch (this.commandData.outcome) {
        case this.ok:
        	promises.push(new StatisticsReadEvent(this.commandData).publish());
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
