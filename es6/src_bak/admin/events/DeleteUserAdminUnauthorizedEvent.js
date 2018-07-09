import AbstractDeleteUserAdminUnauthorizedEvent
    from "../../../gen/admin/events/AbstractDeleteUserAdminUnauthorizedEvent";
import AppUtils from "../../app/AppUtils";

export default class DeleteUserAdminUnauthorizedEvent extends AbstractDeleteUserAdminUnauthorizedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
