import AbstractLoginWithoutCookieEvent from "../../../gen/common/events/AbstractLoginWithoutCookieEvent";
import AppUtils from "../../app/AppUtils";

export default class LoginWithoutCookieEvent extends AbstractLoginWithoutCookieEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
