import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ReadPrivateLessonsOkEvent from "../../../src/navigation/events/ReadPrivateLessonsOkEvent";
import ReadPrivateLessonsUnauthorizedEvent from "../../../src/navigation/events/ReadPrivateLessonsUnauthorizedEvent";
import LogoutAction from "../../../src/common/actions/LogoutAction";

export default class AbstractReadPrivateLessonsCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "navigation.ReadPrivateLessonsCommand");
        this.ok = "ok";
        this.unauthorized = "unauthorized";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new ReadPrivateLessonsOkEvent(this.commandData).publish());
			break;
		case this.unauthorized:
			promises.push(new ReadPrivateLessonsUnauthorizedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LogoutAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('ReadPrivateLessonsCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
