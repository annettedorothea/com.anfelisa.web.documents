import AbstractSaveRoleUnauthorizedEvent from "../../../gen/admin/events/AbstractSaveRoleUnauthorizedEvent";
import AppUtils from "../../app/AppUtils";

export default class SaveRoleUnauthorizedEvent extends AbstractSaveRoleUnauthorizedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
