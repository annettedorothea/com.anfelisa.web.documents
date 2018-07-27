import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import InitialLoginOkEvent from "../../../gen/common/events/InitialLoginOkEvent";
import RouteChangedAction from "../../../src/common/actions/RouteChangedAction";
import DisplayErrorAction from "../../../src/common/actions/DisplayErrorAction";
import LogoutAction from "../../../src/common/actions/LogoutAction";

export default class AbstractInitialLoginCommand extends Command {
    constructor(commandData) {
        super(commandData, "common.InitialLoginCommand");
        this.ok = "ok";
        this.unauthorized = "unauthorized";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new InitialLoginOkEvent(this.commandData).publish());
			promises.push(new TriggerAction(new RouteChangedAction(this.commandData)).publish());
			break;
		case this.unauthorized:
			promises.push(new TriggerAction(new DisplayErrorAction(this.commandData)).publish());
			promises.push(new TriggerAction(new LogoutAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('InitialLoginCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
