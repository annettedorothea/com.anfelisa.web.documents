import AbstractToggleAllScheduleCardSelectionOkEvent from "../../../gen/author/events/AbstractToggleAllScheduleCardSelectionOkEvent";
import AppUtils from "../../app/AppUtils";

export default class ToggleAllScheduleCardSelectionOkEvent extends AbstractToggleAllScheduleCardSelectionOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
