import AbstractToggleMaxIntervalOfBoxOkEvent from "../../../gen/box/events/AbstractToggleMaxIntervalOfBoxOkEvent";
import AppUtils from "../../app/AppUtils";

export default class ToggleMaxIntervalOfBoxOkEvent extends AbstractToggleMaxIntervalOfBoxOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
