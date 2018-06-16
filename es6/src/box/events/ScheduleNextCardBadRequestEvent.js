import AbstractScheduleNextCardBadRequestEvent from "../../../gen/box/events/AbstractScheduleNextCardBadRequestEvent";
import AppUtils from "../../app/AppUtils";

export default class ScheduleNextCardBadRequestEvent extends AbstractScheduleNextCardBadRequestEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
