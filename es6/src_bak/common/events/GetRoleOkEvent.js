import AbstractGetRoleOkEvent from "../../../gen/common/events/AbstractGetRoleOkEvent";
import AppUtils from "../../app/AppUtils";

export default class GetRoleOkEvent extends AbstractGetRoleOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
        if (this.eventData.role === "ADMIN") {
            this.eventData.isAdmin = true;
            //this.eventData.isAuthor = true;
        } else if (this.eventData.role === "AUTHOR") {
            this.eventData.isAuthor = true;
        }
    }
}

/*       S.D.G.       */
