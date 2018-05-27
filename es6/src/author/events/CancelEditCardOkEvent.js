import AbstractCancelEditCardOkEvent from "../../../gen/author/events/AbstractCancelEditCardOkEvent";
import AppUtils from "../../app/AppUtils";

export default class CancelEditCardOkEvent extends AbstractCancelEditCardOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
