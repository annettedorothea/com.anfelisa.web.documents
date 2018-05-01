import AbstractGetAllUsersOkEvent from "../../../gen/admin/events/AbstractGetAllUsersOkEvent";
import AppUtils from "../../app/AppUtils";

export default class GetAllUsersOkEvent extends AbstractGetAllUsersOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
