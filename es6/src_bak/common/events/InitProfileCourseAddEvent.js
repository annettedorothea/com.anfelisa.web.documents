import AbstractInitProfileCourseAddEvent from "../../../gen/common/events/AbstractInitProfileCourseAddEvent";
import AppUtils from "../../app/AppUtils";

export default class InitProfileCourseAddEvent extends AbstractInitProfileCourseAddEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
