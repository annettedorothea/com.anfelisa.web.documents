import AbstractUpdatePasswordAdminSelfEvent from "../../../gen/admin/events/AbstractUpdatePasswordAdminSelfEvent";
import AppUtils from "../../app/AppUtils";

export default class UpdatePasswordAdminSelfEvent extends AbstractUpdatePasswordAdminSelfEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
