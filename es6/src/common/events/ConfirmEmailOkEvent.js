import AbstractConfirmEmailOkEvent from "../../../gen/common/events/AbstractConfirmEmailOkEvent";
import AppUtils from "../../app/AppUtils";

export default class ConfirmEmailOkEvent extends AbstractConfirmEmailOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
