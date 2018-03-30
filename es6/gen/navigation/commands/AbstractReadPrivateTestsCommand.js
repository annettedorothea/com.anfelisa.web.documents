import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ReadPrivateTestsOkEvent from "../../../src/navigation/events/ReadPrivateTestsOkEvent";
import ReadPrivateTestsUnauthorizedEvent from "../../../src/navigation/events/ReadPrivateTestsUnauthorizedEvent";
import LogoutAction from "../../../src/common/actions/LogoutAction";

export default class AbstractReadPrivateTestsCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "navigation.ReadPrivateTestsCommand");
        this.ok = "ok";
        this.unauthorized = "unauthorized";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new ReadPrivateTestsOkEvent(this.commandData).publish());
			break;
		case this.unauthorized:
			promises.push(new ReadPrivateTestsUnauthorizedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LogoutAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('ReadPrivateTestsCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
