import AbstractCancelEditBoxOkEvent from "../../../gen/box/events/AbstractCancelEditBoxOkEvent";
import AppUtils from "../../app/AppUtils";

export default class CancelEditBoxOkEvent extends AbstractCancelEditBoxOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
