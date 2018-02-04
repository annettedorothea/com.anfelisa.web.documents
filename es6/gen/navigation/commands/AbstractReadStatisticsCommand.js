import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import StatisticsReadEvent from "../../../src/navigation/events/StatisticsReadEvent";
import ErrorEvent from "../../../src/common/events/ErrorEvent";
import LogoutAction from "../../../src/common/actions/LogoutAction";

export default class AbstractReadStatisticsCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "navigation.ReadStatisticsCommand");
        this.ok = "ok";
        this.unauthorized = "unauthorized";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new StatisticsReadEvent(this.commandData).publish());
			break;
		case this.unauthorized:
			promises.push(new ErrorEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LogoutAction(this.commandData)).publish());
			break;
		default:
			throw 'unhandled outcome: ' + this.commandData.outcome;
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
