import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import RouteChangedLoginEvent from "../../../src/common/events/RouteChangedLoginEvent";
import RouteChangedRegistrationEvent from "../../../src/common/events/RouteChangedRegistrationEvent";
import LoadDashboardAction from "../../../src/common/actions/LoadDashboardAction";
import LoadUserAction from "../../../src/profile/actions/LoadUserAction";

export default class AbstractRouteChangedCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "common.RouteChangedCommand");
        this.login = "login";
        this.registration = "registration";
        this.dashboard = "dashboard";
        this.profile = "profile";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.login:
			promises.push(new RouteChangedLoginEvent(this.commandData).publish());
			break;
		case this.registration:
			promises.push(new RouteChangedRegistrationEvent(this.commandData).publish());
			break;
		case this.dashboard:
			promises.push(new TriggerAction(new LoadDashboardAction(this.commandData)).publish());
			break;
		case this.profile:
			promises.push(new TriggerAction(new LoadUserAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('RouteChangedCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
