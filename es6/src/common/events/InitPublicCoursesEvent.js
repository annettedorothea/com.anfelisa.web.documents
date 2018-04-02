import AbstractInitPublicCoursesEvent from "../../../gen/common/events/AbstractInitPublicCoursesEvent";
import AppUtils from "../../app/AppUtils";

export default class InitPublicCoursesEvent extends AbstractInitPublicCoursesEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
