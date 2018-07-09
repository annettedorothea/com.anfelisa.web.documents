import AbstractScheduleSelectedCardsUnauthorizedEvent
    from "../../../gen/author/events/AbstractScheduleSelectedCardsUnauthorizedEvent";
import AppUtils from "../../app/AppUtils";

export default class ScheduleSelectedCardsUnauthorizedEvent extends AbstractScheduleSelectedCardsUnauthorizedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
