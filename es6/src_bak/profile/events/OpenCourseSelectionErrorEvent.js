import AbstractOpenCourseSelectionErrorEvent from "../../../gen/profile/events/AbstractOpenCourseSelectionErrorEvent";
import AppUtils from "../../app/AppUtils";

export default class OpenCourseSelectionErrorEvent extends AbstractOpenCourseSelectionErrorEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
