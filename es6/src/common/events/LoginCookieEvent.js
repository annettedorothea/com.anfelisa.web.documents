import AbstractLoginCookieEvent from "../../../gen/common/events/AbstractLoginCookieEvent";
import AppUtils from "../../app/AppUtils";

export default class LoginCookieEvent extends AbstractLoginCookieEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
