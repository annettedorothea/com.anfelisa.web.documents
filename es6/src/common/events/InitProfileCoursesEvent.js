import AbstractInitProfileCoursesEvent from "../../../gen/common/events/AbstractInitProfileCoursesEvent";
import AppUtils from "../../app/AppUtils";

export default class InitProfileCoursesEvent extends AbstractInitProfileCoursesEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
