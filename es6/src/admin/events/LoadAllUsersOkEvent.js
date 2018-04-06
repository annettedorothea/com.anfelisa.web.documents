import AbstractLoadAllUsersOkEvent from "../../../gen/admin/events/AbstractLoadAllUsersOkEvent";
import AppUtils from "../../app/AppUtils";

export default class LoadAllUsersOkEvent extends AbstractLoadAllUsersOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
