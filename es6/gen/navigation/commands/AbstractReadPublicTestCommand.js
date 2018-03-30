import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ReadPublicTestOkEvent from "../../../src/navigation/events/ReadPublicTestOkEvent";

export default class AbstractReadPublicTestCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "navigation.ReadPublicTestCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new ReadPublicTestOkEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('ReadPublicTestCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
