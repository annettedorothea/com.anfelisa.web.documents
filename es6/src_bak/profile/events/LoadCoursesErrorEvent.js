import AbstractLoadCoursesErrorEvent from "../../../gen/profile/events/AbstractLoadCoursesErrorEvent";
import AppUtils from "../../app/AppUtils";

export default class LoadCoursesErrorEvent extends AbstractLoadCoursesErrorEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
