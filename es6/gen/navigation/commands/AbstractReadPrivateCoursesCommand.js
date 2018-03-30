import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ReadPrivateCoursesOkEvent from "../../../src/navigation/events/ReadPrivateCoursesOkEvent";
import ReadPrivateCoursesUnauthorizedEvent from "../../../src/navigation/events/ReadPrivateCoursesUnauthorizedEvent";
import LogoutAction from "../../../src/common/actions/LogoutAction";

export default class AbstractReadPrivateCoursesCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "navigation.ReadPrivateCoursesCommand");
        this.ok = "ok";
        this.unauthorized = "unauthorized";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new ReadPrivateCoursesOkEvent(this.commandData).publish());
			break;
		case this.unauthorized:
			promises.push(new ReadPrivateCoursesUnauthorizedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LogoutAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('ReadPrivateCoursesCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
