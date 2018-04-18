import AbstractLoadCoursesLoadedEvent from "../../../gen/profile/events/AbstractLoadCoursesLoadedEvent";
import AppUtils from "../../app/AppUtils";

export default class LoadCoursesLoadedEvent extends AbstractLoadCoursesLoadedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
