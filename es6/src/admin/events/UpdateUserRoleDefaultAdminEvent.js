import AbstractUpdateUserRoleDefaultAdminEvent from "../../../gen/admin/events/AbstractUpdateUserRoleDefaultAdminEvent";
import AppUtils from "../../app/AppUtils";

export default class UpdateUserRoleDefaultAdminEvent extends AbstractUpdateUserRoleDefaultAdminEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
