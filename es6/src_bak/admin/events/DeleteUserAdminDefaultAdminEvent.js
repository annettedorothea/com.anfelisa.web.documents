import AbstractDeleteUserAdminDefaultAdminEvent from "../../../gen/admin/events/AbstractDeleteUserAdminDefaultAdminEvent";
import AppUtils from "../../app/AppUtils";

export default class DeleteUserAdminDefaultAdminEvent extends AbstractDeleteUserAdminDefaultAdminEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
