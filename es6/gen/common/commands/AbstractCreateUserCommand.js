import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import CreateUserOkEvent from "../../../src/common/events/CreateUserOkEvent";
import CreateUserErrorEvent from "../../../src/common/events/CreateUserErrorEvent";
import RouteAction from "../../../src/common/actions/RouteAction";

export default class AbstractCreateUserCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "common.CreateUserCommand");
        this.ok = "ok";
        this.error = "error";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new CreateUserOkEvent(this.commandData).publish());
			promises.push(new TriggerAction(new RouteAction(this.commandData)).publish());
			break;
		case this.error:
			promises.push(new CreateUserErrorEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('CreateUserCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
