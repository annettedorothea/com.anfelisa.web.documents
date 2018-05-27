import AbstractMaxIntervalChangedOfBoxOkEvent from "../../../gen/box/events/AbstractMaxIntervalChangedOfBoxOkEvent";
import AppUtils from "../../app/AppUtils";

export default class MaxIntervalChangedOfBoxOkEvent extends AbstractMaxIntervalChangedOfBoxOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
