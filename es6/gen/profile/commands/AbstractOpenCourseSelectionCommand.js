import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import OpenCourseSelectionCoursesReadEvent from "../../../src/profile/events/OpenCourseSelectionCoursesReadEvent";
import OpenCourseSelectionErrorEvent from "../../../src/profile/events/OpenCourseSelectionErrorEvent";
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
			promises.push(new OpenCourseSelectionCoursesReadEvent(this.commandData).publish());
			break;
		case this.error:
			promises.push(new OpenCourseSelectionErrorEvent(this.commandData).publish());
			promises.push(new TriggerAction(new RouteHomeAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('OpenCourseSelectionCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
