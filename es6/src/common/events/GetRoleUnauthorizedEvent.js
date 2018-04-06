import AbstractGetRoleUnauthorizedEvent from "../../../gen/common/events/AbstractGetRoleUnauthorizedEvent";
import AppUtils from "../../app/AppUtils";

export default class GetRoleUnauthorizedEvent extends AbstractGetRoleUnauthorizedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
