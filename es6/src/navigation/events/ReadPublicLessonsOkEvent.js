import AbstractReadPublicLessonsOkEvent from "../../../gen/navigation/events/AbstractReadPublicLessonsOkEvent";
import AppUtils from "../../app/AppUtils";

export default class ReadPublicLessonsOkEvent extends AbstractReadPublicLessonsOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
