import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import UserInfoLoadedEvent from "../../../src/profile/events/UserInfoLoadedEvent";
import ErrorEvent from "../../../src/common/events/ErrorEvent";
import RouteHomeAction from "../../../src/common/actions/RouteHomeAction";

export default class AbstractOpenProfileCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "profile.OpenProfileCommand");
        this.userInfoRead = "userInfoRead";
        this.error = "error";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.userInfoRead:
			promises.push(new UserInfoLoadedEvent(this.commandData).publish());
			break;
		case this.error:
			promises.push(new ErrorEvent(this.commandData).publish());
			promises.push(new TriggerAction(new RouteHomeAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('OpenProfileCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
