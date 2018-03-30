import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ReadStatisticsOkEvent from "../../../src/navigation/events/ReadStatisticsOkEvent";
import ReadStatisticsUnauthorizedEvent from "../../../src/navigation/events/ReadStatisticsUnauthorizedEvent";
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
			promises.push(new ReadStatisticsOkEvent(this.commandData).publish());
			break;
		case this.unauthorized:
			promises.push(new ReadStatisticsUnauthorizedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LogoutAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('ReadStatisticsCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
