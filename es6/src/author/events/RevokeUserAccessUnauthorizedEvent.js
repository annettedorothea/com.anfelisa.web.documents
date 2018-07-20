import AbstractRevokeUserAccessUnauthorizedEvent from "../../../gen/author/events/AbstractRevokeUserAccessUnauthorizedEvent";
import AppUtils from "../../app/AppUtils";

export default class RevokeUserAccessUnauthorizedEvent extends AbstractRevokeUserAccessUnauthorizedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
