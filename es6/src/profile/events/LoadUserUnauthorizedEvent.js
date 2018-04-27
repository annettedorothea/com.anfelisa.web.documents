import AbstractLoadUserUnauthorizedEvent from "../../../gen/profile/events/AbstractLoadUserUnauthorizedEvent";
import AppUtils from "../../app/AppUtils";

export default class LoadUserUnauthorizedEvent extends AbstractLoadUserUnauthorizedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventParam);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
