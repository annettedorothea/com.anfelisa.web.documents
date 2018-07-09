import AbstractInviteUserUnauthorizedEvent from "../../../gen/author/events/AbstractInviteUserUnauthorizedEvent";
import AppUtils from "../../app/AppUtils";

export default class InviteUserUnauthorizedEvent extends AbstractInviteUserUnauthorizedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
