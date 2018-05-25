import AbstractToggleMaxIntervalOkEvent from "../../../gen/box/events/AbstractToggleMaxIntervalOkEvent";
import AppUtils from "../../app/AppUtils";

export default class ToggleMaxIntervalOkEvent extends AbstractToggleMaxIntervalOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
