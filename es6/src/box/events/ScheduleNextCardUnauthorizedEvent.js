import AbstractScheduleNextCardUnauthorizedEvent from "../../../gen/box/events/AbstractScheduleNextCardUnauthorizedEvent";
import AppUtils from "../../app/AppUtils";

export default class ScheduleNextCardUnauthorizedEvent extends AbstractScheduleNextCardUnauthorizedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
