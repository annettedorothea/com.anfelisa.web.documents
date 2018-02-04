import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import PublicLessonsReadEvent from "../../../src/navigation/events/PublicLessonsReadEvent";

export default class AbstractReadPublicLessonsCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "navigation.ReadPublicLessonsCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new PublicLessonsReadEvent(this.commandData).publish());
			break;
		default:
			throw 'unhandled outcome: ' + this.commandData.outcome;
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
