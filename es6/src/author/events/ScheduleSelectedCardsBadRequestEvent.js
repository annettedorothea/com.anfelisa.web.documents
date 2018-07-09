import AbstractScheduleSelectedCardsBadRequestEvent
    from "../../../gen/author/events/AbstractScheduleSelectedCardsBadRequestEvent";
import AppUtils from "../../app/AppUtils";

export default class ScheduleSelectedCardsBadRequestEvent extends AbstractScheduleSelectedCardsBadRequestEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
