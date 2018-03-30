import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ReadPrivateTestOkEvent from "../../../src/navigation/events/ReadPrivateTestOkEvent";
import ReadPrivateTestUnauthorizedEvent from "../../../src/navigation/events/ReadPrivateTestUnauthorizedEvent";
import LogoutAction from "../../../src/common/actions/LogoutAction";

export default class AbstractReadPrivateTestCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "navigation.ReadPrivateTestCommand");
        this.ok = "ok";
        this.unauthorized = "unauthorized";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new ReadPrivateTestOkEvent(this.commandData).publish());
			break;
		case this.unauthorized:
			promises.push(new ReadPrivateTestUnauthorizedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LogoutAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('ReadPrivateTestCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
