import AbstractLoginUnauthorizedEvent from "../../../gen/common/events/AbstractLoginUnauthorizedEvent";
import AppUtils from "../../app/AppUtils";

export default class LoginUnauthorizedEvent extends AbstractLoginUnauthorizedEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
