import AbstractReadPrivateCoursesUnauthorizedEvent from "../../../gen/navigation/events/AbstractReadPrivateCoursesUnauthorizedEvent";
import AppUtils from "../../app/AppUtils";

export default class ReadPrivateCoursesUnauthorizedEvent extends AbstractReadPrivateCoursesUnauthorizedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
