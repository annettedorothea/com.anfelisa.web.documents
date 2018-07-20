import AbstractRevokeUserAccessOkEvent from "../../../gen/author/events/AbstractRevokeUserAccessOkEvent";
import AppUtils from "../../app/AppUtils";

export default class RevokeUserAccessOkEvent extends AbstractRevokeUserAccessOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
