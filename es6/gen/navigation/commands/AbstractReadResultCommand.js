import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ReadResultOkEvent from "../../../src/navigation/events/ReadResultOkEvent";
import ReadResultUnauthorizedEvent from "../../../src/navigation/events/ReadResultUnauthorizedEvent";
import LogoutAction from "../../../src/common/actions/LogoutAction";

export default class AbstractReadResultCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "navigation.ReadResultCommand");
        this.ok = "ok";
        this.unauthorized = "unauthorized";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new ReadResultOkEvent(this.commandData).publish());
			break;
		case this.unauthorized:
			promises.push(new ReadResultUnauthorizedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LogoutAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('ReadResultCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
