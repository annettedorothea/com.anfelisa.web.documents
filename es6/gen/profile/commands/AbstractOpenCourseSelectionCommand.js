import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import CoursesLoadedEvent from "../../../src/profile/events/CoursesLoadedEvent";
import ErrorEvent from "../../../src/common/events/ErrorEvent";
import RouteHomeAction from "../../../src/common/actions/RouteHomeAction";

export default class AbstractOpenCourseSelectionCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "profile.OpenCourseSelectionCommand");
        this.coursesRead = "coursesRead";
        this.error = "error";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.coursesRead:
			promises.push(new CoursesLoadedEvent(this.commandData).publish());
			break;
		case this.error:
			promises.push(new ErrorEvent(this.commandData).publish());
			promises.push(new TriggerAction(new RouteHomeAction(this.commandData)).publish());
			break;
		default:
			throw 'unhandled outcome: ' + this.commandData.outcome;
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
