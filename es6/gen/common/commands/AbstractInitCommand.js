import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import InitUserEvent from "../../../src/common/events/InitUserEvent";
import InitNoUserEvent from "../../../src/common/events/InitNoUserEvent";
import LoginAction from "../../../src/common/actions/LoginAction";
import RouteAction from "../../../src/common/actions/RouteAction";

export default class AbstractInitCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "common.InitCommand");
        this.user = "user";
        this.noUser = "noUser";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.user:
			promises.push(new InitUserEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LoginAction(this.commandData)).publish());
			break;
		case this.noUser:
			promises.push(new InitNoUserEvent(this.commandData).publish());
			promises.push(new TriggerAction(new RouteAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('InitCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
