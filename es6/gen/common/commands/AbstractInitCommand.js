import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import InitLoginEvent from "../../../src/common/events/InitLoginEvent";
import InitRegistrationEvent from "../../../src/common/events/InitRegistrationEvent";
import InitDashboardEvent from "../../../src/common/events/InitDashboardEvent";
import LoadDashboardAction from "../../../src/common/actions/LoadDashboardAction";

export default class AbstractInitCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "common.InitCommand");
        this.login = "login";
        this.registration = "registration";
        this.dashboard = "dashboard";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.login:
			promises.push(new InitLoginEvent(this.commandData).publish());
			break;
		case this.registration:
			promises.push(new InitRegistrationEvent(this.commandData).publish());
			break;
		case this.dashboard:
			promises.push(new InitDashboardEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LoadDashboardAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('InitCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
