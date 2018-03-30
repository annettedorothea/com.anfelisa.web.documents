import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ReadBoxesOkEvent from "../../../src/navigation/events/ReadBoxesOkEvent";
import ReadBoxesUnauthorizedEvent from "../../../src/navigation/events/ReadBoxesUnauthorizedEvent";
import LogoutAction from "../../../src/common/actions/LogoutAction";

export default class AbstractReadBoxesCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "navigation.ReadBoxesCommand");
        this.ok = "ok";
        this.unauthorized = "unauthorized";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new ReadBoxesOkEvent(this.commandData).publish());
			break;
		case this.unauthorized:
			promises.push(new ReadBoxesUnauthorizedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LogoutAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('ReadBoxesCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
