import AbstractInviteUserUserDoesNotExistEvent from "../../../gen/author/events/AbstractInviteUserUserDoesNotExistEvent";
import AppUtils from "../../app/AppUtils";

export default class InviteUserUserDoesNotExistEvent extends AbstractInviteUserUserDoesNotExistEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
