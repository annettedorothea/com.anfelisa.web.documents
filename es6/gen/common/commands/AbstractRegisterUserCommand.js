import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import RegisterUserOkEvent from "../../../src/common/events/RegisterUserOkEvent";
import RegisterUserErrorEvent from "../../../src/common/events/RegisterUserErrorEvent";
import RouteAction from "../../../src/common/actions/RouteAction";

export default class AbstractRegisterUserCommand extends Command {
    constructor(commandData) {
        super(commandData, "common.RegisterUserCommand");
        this.ok = "ok";
        this.error = "error";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new RegisterUserOkEvent(this.commandData).publish());
			promises.push(new TriggerAction(new RouteAction(this.commandData)).publish());
			break;
		case this.error:
			promises.push(new RegisterUserErrorEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('RegisterUserCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
