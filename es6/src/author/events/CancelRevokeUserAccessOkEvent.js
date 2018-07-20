import AbstractCancelRevokeUserAccessOkEvent from "../../../gen/author/events/AbstractCancelRevokeUserAccessOkEvent";
import AppUtils from "../../app/AppUtils";

export default class CancelRevokeUserAccessOkEvent extends AbstractCancelRevokeUserAccessOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
