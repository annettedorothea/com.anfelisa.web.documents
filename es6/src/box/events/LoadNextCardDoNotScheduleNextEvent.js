import AbstractLoadNextCardDoNotScheduleNextEvent from "../../../gen/box/events/AbstractLoadNextCardDoNotScheduleNextEvent";
import AppUtils from "../../app/AppUtils";

export default class LoadNextCardDoNotScheduleNextEvent extends AbstractLoadNextCardDoNotScheduleNextEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
