import AbstractMaxIntervalChangedOkEvent from "../../../gen/box/events/AbstractMaxIntervalChangedOkEvent";
import AppUtils from "../../app/AppUtils";

export default class MaxIntervalChangedOkEvent extends AbstractMaxIntervalChangedOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
