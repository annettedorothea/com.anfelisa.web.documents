import AbstractGetAllUsersUnauthorizedEvent from "../../../gen/admin/events/AbstractGetAllUsersUnauthorizedEvent";
import AppUtils from "../../app/AppUtils";

export default class GetAllUsersUnauthorizedEvent extends AbstractGetAllUsersUnauthorizedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
