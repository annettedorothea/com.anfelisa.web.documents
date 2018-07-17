import AbstractClearToastOkEvent from "../../../gen/common/events/AbstractClearToastOkEvent";
import AppUtils from "../../app/AppUtils";

export default class ClearToastOkEvent extends AbstractClearToastOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
