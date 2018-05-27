import AbstractResetPasswordErrorEvent from "../../../gen/common/events/AbstractResetPasswordErrorEvent";
import AppUtils from "../../app/AppUtils";

export default class ResetPasswordErrorEvent extends AbstractResetPasswordErrorEvent {
    prepareDataForView() {
        this.eventData = AppUtils.deepCopy(this.eventData);
        if (this.eventData.data === undefined) {
        	this.eventData.data = {};
        }
    }
}

/*       S.D.G.       */
