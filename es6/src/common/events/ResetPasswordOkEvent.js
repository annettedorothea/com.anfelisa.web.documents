import AbstractResetPasswordOkEvent from "../../../gen/common/events/AbstractResetPasswordOkEvent";
import AppUtils from "../../app/AppUtils";

export default class ResetPasswordOkEvent extends AbstractResetPasswordOkEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
