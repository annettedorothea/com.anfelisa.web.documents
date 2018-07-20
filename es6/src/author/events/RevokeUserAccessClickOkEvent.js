import AbstractRevokeUserAccessClickOkEvent from "../../../gen/author/events/AbstractRevokeUserAccessClickOkEvent";
import AppUtils from "../../app/AppUtils";

export default class RevokeUserAccessClickOkEvent extends AbstractRevokeUserAccessClickOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
