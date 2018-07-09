import AbstractOpenCourseSelectionCoursesReadEvent
    from "../../../gen/profile/events/AbstractOpenCourseSelectionCoursesReadEvent";
import AppUtils from "../../app/AppUtils";

export default class OpenCourseSelectionCoursesReadEvent extends AbstractOpenCourseSelectionCoursesReadEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
