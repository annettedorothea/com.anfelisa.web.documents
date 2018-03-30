import AbstractReadPrivateLessonsOkEvent from "../../../gen/navigation/events/AbstractReadPrivateLessonsOkEvent";
import AppUtils from "../../app/AppUtils";

export default class ReadPrivateLessonsOkEvent extends AbstractReadPrivateLessonsOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
