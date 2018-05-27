import AbstractLogoutOkEvent from "../../../gen/common/events/AbstractLogoutOkEvent";
import AppUtils from "../../app/AppUtils";

export default class LogoutOkEvent extends AbstractLogoutOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
