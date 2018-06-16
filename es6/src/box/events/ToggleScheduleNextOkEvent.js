import AbstractToggleScheduleNextOkEvent from "../../../gen/box/events/AbstractToggleScheduleNextOkEvent";
import AppUtils from "../../app/AppUtils";

export default class ToggleScheduleNextOkEvent extends AbstractToggleScheduleNextOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
