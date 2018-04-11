import AbstractUpdateUserRoleUnauthorizedEvent from "../../../gen/admin/events/AbstractUpdateUserRoleUnauthorizedEvent";
import AppUtils from "../../app/AppUtils";

export default class UpdateUserRoleUnauthorizedEvent extends AbstractUpdateUserRoleUnauthorizedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
