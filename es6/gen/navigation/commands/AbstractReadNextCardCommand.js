import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ReadNextCardOkEvent from "../../../src/navigation/events/ReadNextCardOkEvent";
import ReadNextCardUnauthorizedEvent from "../../../src/navigation/events/ReadNextCardUnauthorizedEvent";
import LogoutAction from "../../../src/common/actions/LogoutAction";

export default class AbstractReadNextCardCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "navigation.ReadNextCardCommand");
        this.ok = "ok";
        this.unauthorized = "unauthorized";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new ReadNextCardOkEvent(this.commandData).publish());
			break;
		case this.unauthorized:
			promises.push(new ReadNextCardUnauthorizedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LogoutAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('ReadNextCardCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
