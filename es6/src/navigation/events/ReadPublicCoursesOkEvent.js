import AbstractReadPublicCoursesOkEvent from "../../../gen/navigation/events/AbstractReadPublicCoursesOkEvent";
import AppUtils from "../../app/AppUtils";

export default class ReadPublicCoursesOkEvent extends AbstractReadPublicCoursesOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
