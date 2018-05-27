import AbstractLoginErrorEvent from "../../../gen/common/events/AbstractLoginErrorEvent";
import AppUtils from "../../app/AppUtils";

export default class LoginErrorEvent extends AbstractLoginErrorEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
