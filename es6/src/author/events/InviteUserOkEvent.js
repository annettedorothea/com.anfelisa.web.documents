import AbstractInviteUserOkEvent from "../../../gen/author/events/AbstractInviteUserOkEvent";
import AppUtils from "../../app/AppUtils";

export default class InviteUserOkEvent extends AbstractInviteUserOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
