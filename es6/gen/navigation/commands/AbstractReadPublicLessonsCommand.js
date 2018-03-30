import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ReadPublicLessonsOkEvent from "../../../src/navigation/events/ReadPublicLessonsOkEvent";

export default class AbstractReadPublicLessonsCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "navigation.ReadPublicLessonsCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new ReadPublicLessonsOkEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('ReadPublicLessonsCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
