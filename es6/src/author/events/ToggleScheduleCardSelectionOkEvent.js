import AbstractToggleScheduleCardSelectionOkEvent from "../../../gen/author/events/AbstractToggleScheduleCardSelectionOkEvent";
import AppUtils from "../../app/AppUtils";

export default class ToggleScheduleCardSelectionOkEvent extends AbstractToggleScheduleCardSelectionOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
