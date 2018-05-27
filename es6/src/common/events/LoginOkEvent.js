import AbstractLoginOkEvent from "../../../gen/common/events/AbstractLoginOkEvent";
import AppUtils from "../../app/AppUtils";

export default class LoginOkEvent extends AbstractLoginOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
