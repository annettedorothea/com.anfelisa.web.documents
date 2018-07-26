import AbstractDisplayErrorAndLogoutOkEvent from "../../../gen/common/events/AbstractDisplayErrorAndLogoutOkEvent";
import AppUtils from "../../app/AppUtils";

export default class DisplayErrorAndLogoutOkEvent extends AbstractDisplayErrorAndLogoutOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
