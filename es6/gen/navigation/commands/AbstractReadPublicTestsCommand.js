import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ReadPublicTestsOkEvent from "../../../src/navigation/events/ReadPublicTestsOkEvent";

export default class AbstractReadPublicTestsCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "navigation.ReadPublicTestsCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new ReadPublicTestsOkEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('ReadPublicTestsCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
