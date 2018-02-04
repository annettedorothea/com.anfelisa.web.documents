import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import PublicCoursesReadEvent from "../../../src/navigation/events/PublicCoursesReadEvent";

export default class AbstractReadPublicCoursesCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "navigation.ReadPublicCoursesCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new PublicCoursesReadEvent(this.commandData).publish());
			break;
		default:
			throw 'unhandled outcome: ' + this.commandData.outcome;
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
