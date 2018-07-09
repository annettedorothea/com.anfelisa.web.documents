import AbstractUpdatePasswordAdminUnauthorizedEvent
    from "../../../gen/admin/events/AbstractUpdatePasswordAdminUnauthorizedEvent";
import AppUtils from "../../app/AppUtils";

export default class UpdatePasswordAdminUnauthorizedEvent extends AbstractUpdatePasswordAdminUnauthorizedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
