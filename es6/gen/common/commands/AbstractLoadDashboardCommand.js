import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import LoadDashboardOkEvent from "../../../src/common/events/LoadDashboardOkEvent";
import LoadDashboardUnauthorizedEvent from "../../../src/common/events/LoadDashboardUnauthorizedEvent";
import LogoutAction from "../../../src/common/actions/LogoutAction";

export default class AbstractLoadDashboardCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "common.LoadDashboardCommand");
        this.ok = "ok";
        this.unauthorized = "unauthorized";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new LoadDashboardOkEvent(this.commandData).publish());
			break;
		case this.unauthorized:
			promises.push(new LoadDashboardUnauthorizedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LogoutAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('LoadDashboardCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
