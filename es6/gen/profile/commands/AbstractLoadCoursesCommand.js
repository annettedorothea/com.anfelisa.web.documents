import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import LoadCoursesLoadedEvent from "../../../src/profile/events/LoadCoursesLoadedEvent";
import LoadCoursesErrorEvent from "../../../src/profile/events/LoadCoursesErrorEvent";
import RouteHomeAction from "../../../src/common/actions/RouteHomeAction";

export default class AbstractLoadCoursesCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "profile.LoadCoursesCommand");
        this.loaded = "loaded";
        this.error = "error";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.loaded:
			promises.push(new LoadCoursesLoadedEvent(this.commandData).publish());
			break;
		case this.error:
			promises.push(new LoadCoursesErrorEvent(this.commandData).publish());
			promises.push(new TriggerAction(new RouteHomeAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('LoadCoursesCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
