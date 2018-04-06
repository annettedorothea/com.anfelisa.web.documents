import AbstractLoadAllUsersUnauthorizedEvent from "../../../gen/admin/events/AbstractLoadAllUsersUnauthorizedEvent";
import AppUtils from "../../app/AppUtils";

export default class LoadAllUsersUnauthorizedEvent extends AbstractLoadAllUsersUnauthorizedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
